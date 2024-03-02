import { Link } from "react-router-dom";

// import { Avatar } from "@material-ui/core";
import { RxAvatar } from "react-icons/rx";

 // import { db } from "../../firebase";



// import { useState, useEffect } from "react";


import "./index.css";

const SidebarChat=(props)=> {
  const {id,name, addNewChat,addChat }=props
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

  const createChat =async  () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      addChat(roomName)

    }
  }; // /rooms/${id}

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}> 
      <div className="sidebarChat">
        <RxAvatar src="https://api.dicebear.com/7.x/adventurer/svg" />

        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last messages...</p>
        </div>
      </div>
    
      </Link>
      ): (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;

/*
   </Link>
<Avatar src={`https://vatars.dicebear.com/api/human/${seed}.svg`} */