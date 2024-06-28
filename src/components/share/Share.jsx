import "./Share.css";
import { MdPermMedia } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiGrin } from "react-icons/bs";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's on your mind?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia className="media shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <FaHashtag className="tag shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FaLocationDot className="location shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsEmojiGrin className="feeling shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>

        </div>
      </div>
    </div>
  );
}

export default Share