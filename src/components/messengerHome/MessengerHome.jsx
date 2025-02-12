import React from "react";
import "./messengerHome.css";
import { IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";

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
          <div className="chat-users-list"></div>
        </div>
        <div className="chat-body">Body</div>
        <div className="chat-profile">Profile</div>
      </div>
    </>
  );
};

export default MessengerHome;
