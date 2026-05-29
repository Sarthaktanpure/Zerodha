const mongoose = require("mongoose");
const passportLocalMongooseModule = require("passport-local-mongoose");
const passportLocalMongoose =
  passportLocalMongooseModule.default || passportLocalMongooseModule;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
