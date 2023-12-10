import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/profile/Profile";
import UserData from "./components/profile/UserData";
import "./components/counter.css";

function App() {
  return (
    <div>
      <Profile
        userName={UserData[0].userName}
        userCitation={UserData[0].userCitation}
        userHobbies={UserData[0].userHobbies}
        userPictureSRC={UserData[0].userPictureSRC}
        userBio={UserData[0].userBio}
      />
      <Profile
        userName={UserData[1].userName}
        userCitation={UserData[1].userCitation}
        userHobbies={UserData[1].userHobbies}
        userPictureSRC={UserData[1].userPictureSRC}
        userBio={UserData[1].userBio}
      />
      <Counter />
    </div>
  );
}

export default App;
