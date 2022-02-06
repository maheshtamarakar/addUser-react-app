import { useState } from 'react';
import './App.css';
import { UserInput } from './Components/UserInput/UserInput';

import { UserItem } from './Components/UserItem/UserItem';

const users = [
  // {
  //   username: "mahesh",
  //   age: 21,
  // },
  // {
  //   username: "kunal",
  //   age: 22,
  // },
  // {
  //   username: "parikshit",
  //   age: 20,
  // },
];

function App() {
  const [user, setUser] = useState(users);


  const userInputHandler = (userInput) => {
    setUser((prevUser) => {
      return [...prevUser, userInput];
    })

  }
  
  return (
    <div className="App">
      <UserInput onSubmitUser = {userInputHandler}/>
      <UserItem users = {user}/>
    </div>
  );
}

export default App;
