import React from "react";
import { Button } from "../Button";
import classes from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  return (
    <div>
        {/* props.onConfirm is get call whevever clicked so i can set error to null on UserInput */}
      <div className={classes.backdrop} onClick = {props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick = {props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};
