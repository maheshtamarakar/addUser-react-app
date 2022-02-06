import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import './UserInput.css'

const userInputDemo = {
    username:"",
    age:""
}

export const UserInput = (props) => {
    const [userInput, setUserInput] = useState(userInputDemo);

    const inputHandler = (e) =>{
        setUserInput((prevUserInput) => {
            return {...prevUserInput, [e.target.name]:e.target.value};
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmitUser(userInput);
        setUserInput((prevUserInput) => {
            return {...prevUserInput, username:"", age:""};
        });

    }
  return (
    <Card className ="user-inputs">
      <form onSubmit={submitHandler} className= "form">
        <div className="user-input">
          <label htmlFor="">Username</label>
          <input type="text" value={userInput.username} name="username" id="" onChange={inputHandler} />
        </div>

        <div className="user-input">
          <label htmlFor="">Age (Years)</label>
          <input type="number" value={userInput.age} name="age" id="" onChange={inputHandler}/>
        </div>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};
