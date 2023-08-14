import React, { useState } from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";
import ShareModal from "../ShareModal/ShareModal";

const PostSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="PostSide">
      <button className="r-button"  onClick={() => setModalOpened(true)}>
        what's happening
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Posts/>
    </div>
  );
};

export default PostSide;
