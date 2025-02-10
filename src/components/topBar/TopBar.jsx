import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="topbar-container">
        <div className="topbar-search">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6072/6072846.png"
              alt=""
            />
          </Link>
          <div className="search">
            <input type="text" placeholder="Search Chats" />
            <IoSearch id="search-logo" />
          </div>
        </div>

        <div className="topbar-menu">
          <ul>
            <li>
              <Link to="/">
                <GoHome />
              </Link>
            </li>

            <li>
              <Link to="/">
                <FaUserGroup />
              </Link>
            </li>
            <li>
              <Link to="/">
                <GoVideo />
              </Link>
            </li>
          </ul>
        </div>
        <div className="topbar-user"></div>
      </div>
    </div>
  );
};

export default TopBar;
