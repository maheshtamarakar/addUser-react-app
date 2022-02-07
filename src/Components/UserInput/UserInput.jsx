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
        if(userInput.username.length === 0 || userInput.age.length === 0){
          return;
        }
        // Here age is string to conv it to num use "+"
        if(+userInput.age < 1){
          return;
        }
        props.onSubmitUser(userInput);
       
        setUserInput((prevUserInput) => {
            return {...prevUserInput, username:"", age:""};
        });

    }
  return (
    <Card className ="user-inputs">
      <form onSubmit={submitHandler} className= "form">
        <div className="user-input">
          {/* Here my htmlFor of label and input id should be same to tell react that "username" label belongs to "username id" input */}
          <label htmlFor="username">Username</label>
          <input type="text" value={userInput.username} name="username" id="username" onChange={inputHandler} />
        </div>

        <div className="user-input">
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={userInput.age} name="age" id="age" onChange={inputHandler}/>
        </div>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};
