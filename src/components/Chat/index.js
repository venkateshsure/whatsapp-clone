import { db } from "../../firebase";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateValue } from "../../StateProvider";

import { serverTimestamp } from "firebase/firestore";

import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { firestore, auth, FieldValue } from "firebase/firestore";
import {doc, getDoc } from "firebase/firestore";

import "./index.css";

function Chat(props) {
  
  const [input, setInput] = useState("");
  // const { roomId } = useParams();

  const [roomName, setRoomName] = useState("");
   const {match}=props
  const {params}=match
  const {id}=params
  console.log(id)



  useEffect(() => {
    const fetchRoomName = async () => {
      try {
        const roomDoc = await getDoc(doc(db, "rooms", id));
        if (roomDoc.exists()) {
          //console.log(roomDoc.data().name)
          setRoomName(roomDoc.data().name);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    if (id) {
      fetchRoomName();
    }
  }, [id]);
 
 

  const sendMsg = (e) => {
    e.preventDefault();

   /* db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: serverTimestamp(),
    });*/
    console.log(e.target.value)

    setInput("");
  }; 

  const onChangeInput = (event) => {
    setInput(event.target.value);
  }; 

  return (
    
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://api.dicebear.com/7.x/adventurer/svg" />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen ...            
          </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
      <p
            className={`chat_message ${
              true && 'chat_receiver'
            }`}
          >
            <span className="chat_name">venky</span>
            hi 
            <span className="chat_timestamp ">
              3:45pm
            </span>
          </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={onChangeInput}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMsg}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  
  );
}

export default Chat;

/*

 /* const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue(); */

  /* useEffect(() => {
    if (roomId) {

      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

    /*  db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        ); 
    }
  }, [roomId]);





{new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}


{messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName && "chat_receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {new Date(message.timeStamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))} */