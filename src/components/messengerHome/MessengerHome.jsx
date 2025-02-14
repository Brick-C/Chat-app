import React from "react";
import "./messengerHome.css";
import { IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { FaExclamation } from "react-icons/fa6";

const MessengerHome = () => {
  return (
    <>
      <div className="chat-container">
        <div className="chat-users">
          <div className="chat-users-header">
            <div className="chat-users-header-top">
              <h2>Chats</h2>
              <div className="btns">
                <button>
                  <HiDotsHorizontal id="dots" />
                </button>
                <button>
                  <MdOutlineEdit id="dots" />
                </button>
              </div>
            </div>
            <div className="chat-users-header-search">
              <input type="search" />
              <IoSearch id="search-logo" />
            </div>
          </div>
          <div className="chat-users-list">
            <div className="user-item">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>

            <div className="user-item">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>

            <div className="user-item active">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>

            <div className="user-item">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>

            <div className="user-item">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>

            <div className="user-item">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />

              <div className="user-details">
                <span className="user-name">Tamjid Hossain</span>
                <span className="user-chat-info">
                  <span className="text">Call me</span>
                  <span className="time">3h</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-body-active-user">
            <div className="chat-active-user-details">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />
              <span id="chat-name">Tamjid Hossain</span>
            </div>

            <div className="chat-active-user-menu">
              <button>
                <IoCallOutline id="icon" />
              </button>

              <button>
                <GoVideo id="icon" />
              </button>

              <button>
                <FaExclamation id="icon" />
              </button>
            </div>
          </div>

          <div className="chat-body-msg">
            <div className="chat-msg-profile">
              <img
                src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                alt=""
              />
              <span id="chat-name">Tamjid Hossain</span>
            </div>
            <div className="chat-msg-list"></div>
          </div>
        </div>
        <div className="chat-profile">Profile</div>
      </div>
    </>
  );
};

export default MessengerHome;
