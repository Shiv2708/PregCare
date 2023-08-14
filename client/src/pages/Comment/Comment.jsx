import React from "react";
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";
import "./Comment.css";
const Comments = () => {
  
  const params = useParams();
  const postid = params.id;
  return (
    <div className="Home">
      {/* <Post/> */}
      {/* <Comment posid={postid}/> */}
      <h1>hello {postid}</h1>
    </div>
  );
};

export default Comments;
