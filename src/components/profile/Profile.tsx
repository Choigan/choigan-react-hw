import React from "react";
import "./profile.css";
// import UserData from "./UserData";
import { UserDataProps } from "./UserData";

const Profile = (props: UserDataProps) => {
  return (
    <div className="data__container">
      <div className="data__items">
        <div className="img__and__name">
          <img
            className="user__img"
            src={props.userPictureSRC}
            alt="Фото пользователя"
          />
          <h2>{props.userName}</h2>
        </div>
        <div className="cit__and__hob">
          <div className="block">
            <span className="b__text">Цитата:</span>
            <p>{props.userCitation}</p>
          </div>
          <br />
          <div className="block">
            <span className="b__text">Хобби:</span>
            <p>{props.userHobbies}</p>
          </div>
        </div>
      </div>
      <div className="bio">{props.userBio}</div>
    </div>
  );
};

export default Profile;
