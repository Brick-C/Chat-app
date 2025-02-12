import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { FaUnlockAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import ActivateLogin from "../activate/ActivateLogin";
import useDarkMode from "../../hooks/useDarkMode";

const TopBar = () => {
  const { isOpen, toggleMenu, dropDownRef } = useDropdownPopupControl();
  const { user } = useAuthUser();
  const dispatch = useDispatch();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleUserLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="top-bar">
        <div className="topbar-container">
          <div className="topbar-search">
            <Link to="/">
              {user.photo ? (
                <img>{user.photo}</img>
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6072/6072846.png"
                  alt=""
                />
              )}
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
          <div className="topbar-user">
            <button onClick={toggleMenu}>
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </button>

            {isOpen ? (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link>
                      <FaRegUserCircle />
                      Edit Profile
                    </Link>
                  </li>

                  <li>
                    <Link onClick={toggleDarkMode}>
                      <MdOutlineDarkMode />
                      Dark Mode
                    </Link>
                  </li>

                  <li>
                    <Link>
                      <FaUnlockAlt />
                      Change Password
                    </Link>
                  </li>

                  <li>
                    <Link onClick={handleUserLogout}>
                      <IoMdExit />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
