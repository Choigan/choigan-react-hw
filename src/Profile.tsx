import React from "react";
import "./Profile.css";

const ProfilePicture = (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU"
    alt="Картинка профиля"
  />
);
const ProfileName: string = "Choigan Ondar";
const ProfileBio = <p>Обучаюсь в MathHub на Full Stack Developer</p>;
const ProfileCitation = <p>В моем словаре нет слова «невозможно»</p>;
const ProfileHobbies = <p>Футбол, Онлайн Шутеры, Шахматы</p>;

function Profile() {
  return (
    <div className="Profile">
      <div className="MainInfo">
        {ProfilePicture}
        {ProfileName}
      </div>
      <br />
      <hr />
      <div className="Info">
        <div className="redText">Краткое описание профиля:</div>
        {ProfileBio}
        <br />
        <div className="redText">Любимая цитата:</div>
        {ProfileCitation}
        <br />
        <div className="redText">Увлечения:</div>
        {ProfileHobbies}
      </div>
    </div>
  );
}

export default Profile;
