import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ height: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
              to="/"
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
              to="/orders"
            >
              <p className={selectedMenu == 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
              to="/holdings"
            >
              <p className={selectedMenu == 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
              to="/positions"
            >
              <p className={selectedMenu == 3 ? activeMenuClass : menuClass}>
                Position
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
              to="/funds"
            >
              <p className={selectedMenu == 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
              to="/apps"
            >
              <p className={selectedMenu == 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{(user?.name || "User").slice(0, 2).toUpperCase()}</div>
          <div className="profile-copy">
            <p className="username">{user?.name || "User"}</p>
            <p className="profile-email">{user?.email || "Connected"}</p>
          </div>
        </div>
        {isProfileDropDownOpen && (
          <div className="profile-menu">
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
