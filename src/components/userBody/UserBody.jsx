import React, { useEffect } from "react";
import { FaExclamation } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../features/user/userApiSlice";
import { setMessageEmpty } from "../../features/user/userSlice";
import { createToast } from "../../utils/toast";
import { LuCirclePlus, LuImagePlus } from "react-icons/lu";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";

const UserBody = ({ setActiveChat, activeChat }) => {
  const dispatch = useDispatch();
  const { users, error, message } = useSelector((state) => state.user);
  const { isOpenEmoji, toggleMenu } = useDropdownPopupControl();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch]);

  return (
    <>
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
              adipisicing elit. Blanditiis rem perferendis nostrum dolorem modi
              sint mollitia at natus possimus dolores!
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
              adipisicing elit. Blanditiis rem perferendis nostrum dolorem modi
              sint mollitia at natus possimus dolores!
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
    </>
  );
};

export default UserBody;
