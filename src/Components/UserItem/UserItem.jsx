import React from "react";
import { UserDetail } from "./UserDetail/UserDetail";

import "./UserItem.css";

export const UserItem = (props) => {
  if (props.users.length === 0) {
    return <div></div>
  }
  return (
    <div className="user-items">
      {props.users.map((user) => {
        return (
          <UserDetail name = {user.username} age = {user.age} key = {Math.random().toString()} />
        );
      })}
    </div>
  );
};
