import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialHive</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon black_icon" />
          <input
            placeholder="Search for Friend, Post or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoPerson className="white_icon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <IoChatbox className="white_icon" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications className="white_icon" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="default" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
