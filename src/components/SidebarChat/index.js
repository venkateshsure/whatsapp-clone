import { Avatar } from "@material-ui/core";

import { db } from "../../firebase";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import "./index.css";

function SidebarChat({ id, name, addNewChat }) {
  // const [seed,setSeed]=useState("")
  /* const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]); */

  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      /*db.collection("room").add({
        name: roomName,
      });*/
    }
  }; 

  return !addNewChat ?(
    
      <div className="sidebarChat">
        <Avatar src="https://api.dicebear.com/7.x/adventurer/svg" />

        <div className="sidebarChat_info">
          <h2> room name</h2>
          <p>Last messages...</p>
        </div>
      </div>
    
  ): (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

/*
   <Link to={`/rooms/${id}`}></Link>
<Avatar src={`https://vatars.dicebear.com/api/human/${seed}.svg`} */