import "./Post.css";
import { GrMoreVertical } from "react-icons/gr";
import {Users} from "../../dummyData";
import { useState } from "react";
const Post = ({post}) => {
  const [like,setLike]=useState(post.like);
  const [isLiked,setIsLiked]=useState(false);
  const likeHandler=()=>{
    setLike(isLiked ? like-1 :like+1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
            <GrMoreVertical />
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon l"
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon h"
              src="assets/heart.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} People Like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post