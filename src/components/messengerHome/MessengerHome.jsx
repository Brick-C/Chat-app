import React from "react";
import "./messengerHome.css";
import { IoCallOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { FaExclamation } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { LuCirclePlus } from "react-icons/lu";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import { CgProfile } from "react-icons/cg";
import { GoBell } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import Collapsible from "react-collapsible";
import Users from "../users/Users";

const MessengerHome = () => {
  const { isOpenEmoji, toggleMenu } = useDropdownPopupControl();

  return (
    <>
      <div className="chat-container">
        <Users />
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
            <div className="chat-msg-list">
              <div className="my-msg">
                <div className="msg-text">
                  Hello! How are You? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Blanditiis rem perferendis nostrum dolorem
                  modi sint mollitia at natus possimus dolores!
                </div>
                <div className="msg-photo">
                  <img
                    src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="msg-time">
                <span>9:30 PM</span>
              </div>
              <div className="friend-msg">
                <img
                  src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                  alt=""
                />
                <div className="msg-text">
                  I am fine. Thank you. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Illum, nobis.
                </div>
                <div className="msg-photo"></div>
              </div>

              <div className="my-msg">
                <div className="msg-text">
                  Hello! How are You? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Blanditiis rem perferendis nostrum dolorem
                  modi sint mollitia at natus possimus dolores!
                </div>
                <div className="msg-photo">
                  <img
                    src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="msg-time">
                <span>9:30 PM</span>
              </div>
              <div className="friend-msg">
                <img
                  src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
                  alt=""
                />
                <div className="msg-text">
                  I am fine. Thank you. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Illum, nobis.
                </div>
                <div className="msg-photo"></div>
              </div>
            </div>
          </div>

          <div className="chat-body-form">
            <div className="chat-body-icons">
              <ul>
                <li>
                  <LuImagePlus />
                </li>

                <li>
                  <LuCirclePlus />
                </li>
              </ul>
            </div>
            <div className="chat-body-inputs">
              <input type="text" />
              {isOpenEmoji && (
                <div className="chat-emoji-picker">
                  <EmojiPicker />
                </div>
              )}
              <button id="smile-button" onClick={toggleMenu}>
                😀
              </button>
            </div>
            <div className="chat-body-emoji">👍</div>
          </div>
        </div>
        <div className="chat-profile">
          <div className="profile-info">
            <img
              src="https://images.stockcake.com/public/5/b/c/5bc82822-fc5a-498e-9839-256649c60954_medium/handsome-man-portrait-stockcake.jpg"
              alt=""
            />
            <span id="chat-name">Tamjid Hossain</span>

            <ul>
              <li>
                <button>
                  <CgProfile id="profile-side" />
                </button>
              </li>

              <li>
                <button>
                  <GoBell id="profile-side" />
                </button>
              </li>

              <li>
                <button>
                  <IoMdSearch id="profile-side" />
                </button>
              </li>
            </ul>

            <div className="profile-options">
              <Collapsible trigger="Chat info">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda, maiores.
                </p>
              </Collapsible>

              <Collapsible trigger="Customize chat">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda, maiores.
                </p>
              </Collapsible>

              <Collapsible trigger="Media, files and links">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda, maiores.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessengerHome;
