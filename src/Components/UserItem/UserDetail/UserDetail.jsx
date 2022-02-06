import React from "react";

export const UserDetail = (props) => {
  return (
    <div className="user-item__inner">
      {props.name} ({props.age} Year Old)
    </div>
  );
};
