import React, { useState } from "react";
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ShareModal from "../ShareModal/ShareModal";
// import "./RightSide.css";

const ProfileLeft = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft