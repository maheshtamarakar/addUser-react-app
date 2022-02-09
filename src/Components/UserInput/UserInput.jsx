import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal/ErrorModal";
import "./UserInput.css";

export const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();


  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title:"Invalid Input",
        message:"Please enter a valid name and age (non-empty values)."
      })
      return;
    }
    // Here age is string to conv it to num use "+"
    if (+userAge < 1) {
      setError({
        title:"Invalid Age",
        message:"Please enter a valid Age(> 0)."
      })
      return;
    }
    //taking two inputs that i Created
    props.onSubmitUser(userName, userAge);

    setUserAge("");
    setUserName("");
  };

  //setError to null whenever someone click on modal button or on sorrounding 
  // by making error null it will not execute "ErrorModal" component bcoz it will be undefined
  const errorHandler = () => {
    setError(null);
  }
  return (
    <>
      {/* if my error is non empty run "ErrorModal" component */}
      {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler} />}
    <Card className="user-inputs">
      <form onSubmit={submitHandler} className="form">
        <div className="user-input">
          {/* Here my htmlFor of label and input id should be same to tell react that "username" label belongs to "username id" input */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userName}
            name="username"
            id="username"
            onChange={userNameHandler}
          />
        </div>

        <div className="user-input">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={userAge}
            name="age"
            id="age"
            onChange={userAgeHandler}
          />
        </div>
        <Button type = "submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};
