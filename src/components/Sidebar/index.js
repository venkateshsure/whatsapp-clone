import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";

import SidebarChat from "../SidebarChat";
import { db } from "../../firebase";
import {  collection, query, where, getDocs } from "firebase/firestore";


import { useState, useEffect } from "react";
// import { useStateValue } from "../../StateProvider";

import "./index.css";

function Sidebar() {
     const [rooms, setRooms] = useState([]);
  // const [{ user }] = useStateValue();
  // const [{ user }, dispatch] = useStateValue();

   useEffect(() => {

    const getDatabase=async()=>{
      const q = query(collection(db, "rooms"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setRooms({
          id: doc.id,
          data: doc.data(),
        })
      });

  }

    getDatabase();




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

    
}, []);
console.log(rooms)
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
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

/*  {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}  */
