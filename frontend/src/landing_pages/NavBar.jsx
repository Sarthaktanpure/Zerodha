import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "../App.css";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const endpoint = "http://localhost:8080";
  const dashboardUrl = "http://localhost:5174";

  useEffect(() => {
    fetch(`${endpoint}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Not logged in");
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${endpoint}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("authToken");
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="navbar bg-white border-bottom navbar-expand-lg sticky-top py-3" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/products">
                Products
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">
                Support
              </Link>
            </li>

            {!loading && user ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link text-muted"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <a
                    className="btn px-4 py-2 text-white d-inline-block"
                    href={dashboardUrl}
                    style={{
                      backgroundColor: "#387ed1",
                      borderRadius: "6px",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      boxShadow: "0 4px 12px rgba(56, 126, 209, 0.15)",
                      transition: "all 0.25s ease-in-out"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2a6dbf";
                      e.target.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#387ed1";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Go to Dashboard
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-muted" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <Link
                    className="btn px-4 py-2 text-white d-inline-block"
                    to="/signup"
                    style={{
                      backgroundColor: "#387ed1",
                      borderRadius: "6px",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      boxShadow: "0 4px 12px rgba(56, 126, 209, 0.15)",
                      transition: "all 0.25s ease-in-out"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2a6dbf";
                      e.target.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#387ed1";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>           
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
