import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const AuthPage = ({ mode }) => {
  const isLogin = mode === "login";
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
      if (isLogin) {
        await login({
          email: form.email,
          password: form.password,
        });
      } else {
        await signup({
          name: form.name,
          email: form.email,
          password: form.password,
        });
      }

      const nextPath = location.state?.from?.pathname || "/";
      navigate(nextPath, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <div className="auth-brand">
          <span className="auth-brand-mark">Z</span>
          <div>
            <p>Zerodha Desk</p>
            <h1>{isLogin ? "Welcome back" : "Create your account"}</h1>
          </div>
        </div>

        <p className="auth-copy">
          Trade, track, and manage your portfolio from one responsive dashboard.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </label>
          )}

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              minLength={6}
            />
          </label>

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Create account"}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <Link to={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Sign up" : "Login"}
          </Link>
        </p>
      </div>

      <div className="auth-hero">
        <div className="auth-hero-card">
          <p className="auth-hero-kicker">Market calm, clean control</p>
          <h2>Responsive on desktop, tablet, and mobile.</h2>
          <p>
            Built to keep your buy, sell, holdings, and analytics workflows
            centered and usable on any screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
