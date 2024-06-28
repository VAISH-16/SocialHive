import "./Sidebar.css"
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoBookmarksSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { SiDiscourse } from "react-icons/si";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsChatSquareFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <HiUserGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <IoBookmarksSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsFillQuestionSquareFill className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaRegMoneyBill1 className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdEventAvailable className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SiDiscourse className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar