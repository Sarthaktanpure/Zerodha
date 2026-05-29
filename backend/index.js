require("dotenv").config();

const crypto = require("crypto");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

const Holding = require("./model/HoldingSchema");
const Position = require("./model/PositionSchema");
const Order = require("./model/OrderSchema");
const User = require("./model/UserSchema");

const app = express();
const port = process.env.PORT || 8080;
const jwtSecret = process.env.JWT_SECRET || "zerodha-demo-secret";

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Failed to connect DB", err?.message || err);
  });

passport.use(User.createStrategy());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

function base64UrlEncode(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function signAuthToken(payload) {
  const body = {
    ...payload,
    iat: Date.now(),
    exp: Date.now() + 1000 * 60 * 60 * 12,
  };

  const encoded = base64UrlEncode(body);
  const signature = crypto
    .createHmac("sha256", jwtSecret)
    .update(encoded)
    .digest("base64url");

  return `${encoded}.${signature}`;
}

function verifyAuthToken(token) {
  try {
    if (!token || !token.includes(".")) {
      return null;
    }

    const [encoded, signature] = token.split(".");
    const expectedSignature = crypto
      .createHmac("sha256", jwtSecret)
      .update(encoded)
      .digest("base64url");

    const provided = Buffer.from(signature);
    const expected = Buffer.from(expectedSignature);

    if (
      provided.length !== expected.length ||
      !crypto.timingSafeEqual(provided, expected)
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8")
    );

    if (payload.exp && payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch (_error) {
    return null;
  }
}

function getTokensFromRequest(req) {
  const tokens = [];
  const authHeader = req.headers.authorization || "";
  if (authHeader.startsWith("Bearer ")) {
    tokens.push(authHeader.slice(7));
  }

  if (req.headers["x-auth-token"]) {
    tokens.push(req.headers["x-auth-token"]);
  }

  const cookieHeader = req.headers.cookie || "";
  const cookieToken = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("authToken="));

  if (cookieToken) {
    tokens.push(decodeURIComponent(cookieToken.split("=").slice(1).join("=")));
  }

  return tokens;
}

function buildAuthCookie(token) {
  return `authToken=${encodeURIComponent(
    token
  )}; Path=/; Max-Age=43200; SameSite=Lax; HttpOnly`;
}

function requireAuth(req, res, next) {
  const tokens = getTokensFromRequest(req);
  const payload = tokens.map(verifyAuthToken).find(Boolean);

  if (!payload) {
    return res.status(401).json({ message: "Authentication required" });
  }

  req.auth = payload;
  next();
}

function toUserResponse(user) {
  return {
    id: user._id,
    email: user.email,
    name: user.name,
  };
}

app.get("/", (_req, res) => {
  res.json({ message: "Zerodha backend is running" });
});

app.post("/auth/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const user = new User({
      email: normalizedEmail,
      name: name.trim(),
    });

    const registeredUser = await User.register(user, password);
    const token = signAuthToken({
      sub: registeredUser._id.toString(),
      email: registeredUser.email,
      name: registeredUser.name,
    });

    res.setHeader("Set-Cookie", buildAuthCookie(token));

    return res.status(201).json({
      token,
      user: toUserResponse(registeredUser),
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Unable to create account",
    });
  }
});

app.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        message: info?.message || "Invalid email or password",
      });
    }

    const token = signAuthToken({
      sub: user._id.toString(),
      email: user.email,
      name: user.name,
    });

    res.setHeader("Set-Cookie", buildAuthCookie(token));

    return res.json({
      token,
      user: toUserResponse(user),
    });
  })(req, res, next);
});

app.get("/auth/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.auth.sub).select("email name");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({ user: toUserResponse(user) });
});

app.post("/auth/logout", (_req, res) => {
  res.setHeader(
    "Set-Cookie",
    "authToken=; Path=/; Max-Age=0; SameSite=Lax; HttpOnly"
  );
  return res.json({ message: "Logged out" });
});

app.get("/allHoldings", requireAuth, async (_req, res) => {
  const holdings = await Holding.find({
    $or: [
      { userId: _req.auth.sub },
      { userId: { $exists: false } },
      { userId: null },
    ],
  });
  res.json(holdings);
});

app.get("/allPositions", requireAuth, async (_req, res) => {
  const allPositions = await Position.find({
    $or: [
      { userId: _req.auth.sub },
      { userId: { $exists: false } },
      { userId: null },
    ],
  });
  res.json(allPositions);
});

app.get("/allOrders", requireAuth, async (_req, res) => {
  const orders = await Order.find({ userId: _req.auth.sub }).sort({
    createdAt: -1,
  });
  res.json(orders);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({ message: "Missing order fields" });
    }

    const order = await Order.create({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
      userId: req.auth.sub,
    });

    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to create order",
    });
  }
});

app.post("/sell", requireAuth, async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    if (!name || qty == null || price == null) {
      return res.status(400).json({ message: "Missing sell fields" });
    }

    const order = await Order.create({
      name,
      qty: Number(qty),
      price: Number(price),
      mode: "SELL",
      userId: req.auth.sub,
    });

    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to create sell order",
    });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
