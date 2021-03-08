import { Avatar, IconButton } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed", input);
  };

  const today = new Date();

  const time = new Intl.DateTimeFormat("default", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  }).format(today);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <InboxIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__reciever"}`}>
          <p>
            <span className="chat__name"> Brian Kim</span>
            yoyoyoyoy
            <span className="chat__timestamp">{time}</span>
          </p>
        </div>
      </div>
      <div className="chat__footer">
        <div className="footer__top">
          <div className="footer__right">
            <IconButton>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <CalendarTodayIcon />
            </IconButton>
          </div>
          <div className="footer__left">
            <IconButton>
              <CallIcon />
            </IconButton>
            <IconButton>
              <VideocamIcon />
            </IconButton>
          </div>
        </div>
        <form action="">
          <input
            name="message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
