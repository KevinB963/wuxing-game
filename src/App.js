import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//an array for choosing the choice (both for player and
//computer)
const choice = ["Metal", "Water", "Wood", "Fire", "Earth"]

function App() {
  //variables containing player, computer, and their scores.
  const [playerchoice, setplayerchoice] = useState("")
  const [computerchoice, setcomputerchoice] =useState("")
  const [playerscore, setplayerscore] = useState(0)
  const [computerscore, setcomputerscore] = useState(0)
  
  const GamePlay = (choice) => {
    //randomizer function for computer choice
    computerchoice = choice[Math.floor(Math.random() * choice.length)]
    // set player's choice based on the buttons clicked
    setplayerchoice(choice) 
    // set computer choice randomly based on previous function.
    setcomputerchoice(computerchoice) 

    //loop until 3 wins for either player or computer 
    while( playerscore || computerscore < 3){
      //if both choices are the same then no points
      if (playerchoice == computerchoice){

      }
    }
  }
  return (
    <div>
      <div> Player's score: {playerscore} </div>
      <div> Computer's score {computerscore} </div>
      <div>
        <button onClick={setplayerchoice} > Metal  </button>
        <button onClick={setplayerchoice} > Water </button>
        <button onClick={setplayerchoice} > Wood </button>
        <button onClick={setplayerchoice} > Fire </button>
        <button onClick={setplayerchoice} > Earth </button>
      </div>
    </div>
  );
}

export default App;
