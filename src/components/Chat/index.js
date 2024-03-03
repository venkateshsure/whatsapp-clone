import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { MdAttachFile } from "react-icons/md";
import { useStateValue } from "../../StateProvider";

import { useState, useEffect } from "react";

 import { useParams } from "react-router-dom";

import { collection, doc, getDoc,query, orderBy, onSnapshot,serverTimestamp,addDoc} from "firebase/firestore";

import { db } from "../../firebase";

import "./index.css";

function Chat() {
    const {roomId}=useParams()
    const [input, setInput] = useState("");
    const [roomName, setRoomName] = useState("");
    const [messages,setMessages]=useState([])
    const [{user}]=useStateValue()

  useEffect(() => {
    const fetchRoomName = async () => {
      try {
        const roomDoc = await getDoc(doc(db, "rooms", roomId));
        if (roomDoc.exists()) {
          setRoomName(roomDoc.data().name);

          const q = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("timestamp", "asc")
          );

          const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
          });

          return unsubscribe;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    if (roomId) {
      fetchRoomName();
    }

    return () => {
      // Cleanup function
    };

  },[roomId])
 

  const sendMsg = async  (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "rooms", roomId, "messages"), {
        message: input,
        name: user.displayName, 
        timestamp: serverTimestamp() 
      });
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setInput("");
  }; 

  const onChangeInput = (event) => {
    setInput(event.target.value);
  }; 

  return (
    <div className="chat">
      <div className="chat_header">
        <RxAvatar src="https://api.dicebear.com/7.x/adventurer/svg" />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen{" "} {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}           
          </p>
        </div>
        <div className="chat_headerRight">
          
           <CiSearch/>
         
            <MdAttachFile />
          
            <MdMoreVert />
         
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message)=>(
          <p
          key={message.name}
          className={`chat_message ${
            message.name===user.displayName && 'chat_receiver'
          }`}
        >
          <span className="chat_name">{message.name}</span>
          {message.message}
          <span className="chat_timestamp ">
            {new Date(
              message?.timestamp?.toDate()
            ).toUTCString()}
          </span>
        </p>
        ))}
      </div>
      <div className="chat_footer">
        <MdInsertEmoticon />
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
        <FaMicrophone />
      </div>
    </div>
  
  );
}

export default Chat;