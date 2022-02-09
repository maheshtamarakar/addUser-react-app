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

  //You can take two input also on the event you created
  const userInputHandler = (uName, uAge) => {
    setUser((prevUserList) => {
      return [...prevUserList, {username:uName, age:uAge}];
    })

  }
  
  return (
    <div className="App">

      {/* I name it "onSubmitUser" bcoz it working like and event  */}
      <UserInput onSubmitUser = {userInputHandler}/>
      <UserItem users = {user}/>
    </div>
  );
}

export default App;
