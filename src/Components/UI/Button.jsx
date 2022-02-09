import React from "react";

import "./Button.css";

export const Button = (props) => {
  return (
    <button
      className="btn"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
