import React from "react";
import InfoSide from "../../components/InfoSide/InfoSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Info.css";
const Info = () => {
  return (
    <div className="Info">
      <ProfileSide/>
      <InfoSide />
      <RightSide />
    </div>
  );
};

export default Info;
