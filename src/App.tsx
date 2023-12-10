import React from "react";
import "./App.css";
import { type } from "os";

type userNameDataProps = {
  userName: string;
};

const userData = {
  userName: "Джон Уик",
};

const UserNameWrite = (props: userNameDataProps) => {
  return <div>{props.userName}</div>;
};

function App() {
  return (
    <div>
      <UserNameWrite userName={userData.userName} />
    </div>
  );
}

export default App;
