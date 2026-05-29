import React, { useState } from "react";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8080";
const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

const AuthPage = ({ mode }) => {
  const isLogin = mode === "login";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${endpoint}${isLogin ? "/auth/login" : "/auth/signup"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(
          isLogin
            ? { email: form.email, password: form.password }
            : { name: form.name, email: form.email, password: form.password }
        ),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to authenticate");
      }

      window.location.assign(dashboardUrl);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-auth-shell">
      <div className="landing-auth-card">
        <p className="landing-auth-kicker">Zerodha account</p>
        <h1>{isLogin ? "Login to continue" : "Open your account"}</h1>
        <p className="landing-auth-copy">
          Start here with a clean, responsive sign-in experience that takes you straight to the dashboard.
        </p>

        <form className="landing-auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
          )}

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              minLength={6}
              required
            />
          </label>

          {error && <p className="landing-auth-error">{error}</p>}

          <button type="submit" className="landing-auth-button" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login to Dashboard" : "Create account and open Dashboard"}
          </button>
        </form>

        <p className="landing-auth-switch">
          {isLogin ? "Need an account?" : "Already registered?"}{" "}
          <Link to={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Signup" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
