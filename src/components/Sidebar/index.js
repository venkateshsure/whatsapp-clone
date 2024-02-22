import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";

import SidebarChat from "../SidebarChat";
import { db } from "../../firebase";
import {  collection, query, getDocs,addDoc } from "firebase/firestore";



import { useState, useEffect } from "react";
// import { useStateValue } from "../../StateProvider";

import "./index.css";

function Sidebar() {
     const [rooms, setRooms] = useState([]);
  // const [{ user }] = useStateValue();
  // const [{ user }, dispatch] = useStateValue();

  const addChat=async (roomName)=>{
    try{
      const docRef = await addDoc(collection(db, "rooms"), { name: roomName });
      // After adding the room, you might want to update the state to reflect the new room immediately
       setRooms(prevRooms => [...prevRooms, { id: docRef.id, data: { name: roomName } }]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    const getDatabase = async () => {
      const q = query(collection(db, "rooms"));
      try {
        const querySnapshot = await getDocs(q);
        const roomsData = [];
        querySnapshot.forEach((doc) => {
          const eachRoom = {
            id: doc.id,
            data: doc.data(),
          };
          roomsData.push(eachRoom);
        });
        setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching rooms: ", error);
      }
    };
  
    getDatabase();

    /* return ()=>{
      getDatabase()
    }*/

  }, []);

  
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <AccountCircleIcon />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input
            className="input"
            type="text"
            placeholder="search or start new chat"
          />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addChat={addChat} addNewChat/>
        {rooms.map((room) => (
          <SidebarChat addChat={addChat} key={room.id} id={room.id} name={room.data.name} />
        ))} 
      </div>
    </div>
  );
}

export default Sidebar;

/*  
        /* const q = query(collection(db, "rooms"))
  const unsub = onSnapshot(q, (querySnapshot) => {
    console.log("Data", querySnapshot.docs.map(d => doc.data()));
  });*/


    /* const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
    setRooms(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    )
    ); */
