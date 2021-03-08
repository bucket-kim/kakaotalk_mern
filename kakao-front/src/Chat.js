import { Avatar, IconButton } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
        <div className="chat__message">YO</div>
      </div>
      <div className="chat__footer">
        <h2>footer</h2>
      </div>
    </div>
  );
}

export default Chat;
