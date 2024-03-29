import { Link } from "react-router-dom";


import { RxAvatar } from "react-icons/rx";

import {  collection, query,orderBy, limit,getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";

import { db } from "../../firebase";


import "./index.css";

const SidebarChat=(props)=> {
  const {roomId,name, addNewChat,addChat }=props
  console.log(roomId)
  // const [seed,setSeed]=useState("")
   const [messages, setMessages] = useState("");
 useEffect(() => {
  const fetchLastMessage = async () => {
    try {
        const q = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("timestamp", "desc"),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setMessages(doc.data().message);
        });
    } catch (error) {
        console.error("Error fetching last message: ", error);
    }
};
if(roomId){
  fetchLastMessage();
}
  }, [roomId]); 

  const createChat =async  () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      addChat(roomName)

    }
  }; 

  return !addNewChat ? (
    <Link to={`/rooms/${roomId}`}> 
      <div className="sidebarChat">
        <RxAvatar src="https://api.dicebear.com/7.x/adventurer/svg" />

        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>{messages}</p>
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

 /*  </Link>
<Avatar src={`https://vatars.dicebear.com/api/human/${seed}.svg`} */