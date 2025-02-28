import React, { useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createChat,
  getUserToUserChat,
} from "../../features/chat/chatApiSlice";
import useAuthUser from "../../hooks/useAuthUser";
import { act } from "react";

const MessengerHome = () => {
  const { isOpenEmoji, toggleMenu } = useDropdownPopupControl();
  const [activeChat, setActiveChat] = useState(false);
  const [chat, setChat] = useState("");
  const [chatImage, setChatImage] = useState([]);
  const { chats } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const scrollChat = useRef();
  const { user } = useAuthUser();

  const handleMessageSend = (e) => {
    if (e.key === "Enter") {
      const form_data = new FormData();

      form_data.append("chat", chat);
      form_data.append("receiverId", activeChat._id);
      form_data.append("chat-image", chatImage);

      dispatch(createChat(form_data))
        .then((result) => {
          console.log("Chat message sent successfully:", result);
        })
        .catch((error) => {
          console.error("Error sending chat message from frontend:", error);
        });
      setChat("");
      setChatImage(null);
    }
  };

  const handleChatPhoto = (e) => {
    setChatImage(e.target.files[0]);
  };

  useEffect(() => {
    if (chats && chats.length > 0 && scrollChat.current) {
      const messageList = scrollChat.current;
      const lastMessage = messageList.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [chats]);

  useEffect(() => {
    if (activeChat && activeChat._id) {
      console.log("Fetching chats for user:", activeChat._id);
      dispatch(getUserToUserChat(activeChat._id));
    } else {
      console.log(
        "No active chat selected, or invalid activeChat, not fetching chats."
      );
    }
  }, [activeChat, dispatch]);

  return (
    <>
      <div className="chat-container">
        <Users setActiveChat={setActiveChat} activeChat={activeChat} />
        <div className="chat-body">
          {activeChat ? (
            <>
              <div className="chat-body-active-user">
                <div className="chat-active-user-details">
                  <img src={activeChat.photo} alt="" />
                  <span id="chat-name">{activeChat.name}</span>
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
                  <img src={activeChat.photo} alt="" />
                  <span id="chat-name">{activeChat.name}</span>
                </div>
                <div className="chat-msg-list" ref={scrollChat}>
                  {chats && chats.length > 0
                    ? chats.map((item, index) => {
                        return (
                          <>
                            {item.senderId === user._id ? (
                              <React.Fragment
                                key={item._id || `chat-item-${index}`}
                              >
                                <div className="my-msg">
                                  <div className="msg-text">
                                    {item.message.text}
                                  </div>
                                  <div className="msg-photo">
                                    <img src={item.message.photo} alt="" />
                                  </div>
                                </div>
                              </React.Fragment>
                            ) : (
                              <div className="friend-msg">
                                <div className="friend-icon">
                                  <img src={activeChat.photo} alt="" />
                                </div>
                                <div className="msg-text">
                                  {item.message.text}
                                </div>
                                <div className="msg-photo">
                                  <img src={item.message.photo} alt="" />
                                </div>
                              </div>
                            )}

                            <div className="msg-time">
                              <span>9:30 PM</span>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </div>
              </div>

              <div className="chat-body-form">
                <div className="chat-body-icons">
                  <ul>
                    <li>
                      <label>
                        <LuImagePlus />
                        <input
                          type="file"
                          id="chat-image"
                          style={{ display: "none" }}
                          onChange={handleChatPhoto}
                        />
                      </label>
                    </li>

                    <li>
                      <LuCirclePlus />
                    </li>
                  </ul>
                </div>
                <div className="chat-body-inputs">
                  <input
                    type="text"
                    onChange={(e) => setChat(e.target.value)}
                    value={chat}
                    onKeyDown={handleMessageSend}
                  />
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
          ) : (
            "No chats selected"
          )}
        </div>
        <div className="chat-profile">
          {activeChat ? (
            <>
              <div className="profile-info">
                <img src={activeChat.photo} alt="" />
                <span id="chat-name">{activeChat.name}</span>

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
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MessengerHome;
