import React from "react";
import "./Profile.css";
import ProfileCitation from "./profileCitation";
import ProfileHobbies from "./profileHobbies";
import ProfileName from "./profileName";
import ProfilePicture from "./profilePicture";
import ProfileBio from "./profileBio";

function Profile() {
  return (
    <div className="main">
      <div className="info">
        <div>
          <ProfilePicture />
        </div>
        <div>
          <div>
            <ProfileName />
          </div>
          <div>
            <span className="fontBlack">Цитата: </span>
            <ProfileCitation />
          </div>
          <br />
          <div>
            <span className="fontBlack">Хобби: </span>
            <ProfileHobbies />
          </div>
        </div>
      </div>

      <div className="bio">
        <p className="fontBlack">Биография</p>
        <ProfileBio />
      </div>
    </div>
  );
}

export default Profile;
