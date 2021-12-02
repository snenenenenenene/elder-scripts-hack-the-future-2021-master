import React, {useEffect} from "react";

/*
   GAME OVER
   ---------
   In dit component bouw je het endgame scherm.
*/

const GameOver = (outcome) => {
  // const [accusation, setAccusation] = outcome.outcome.accusation
  // const [solution, setSolution] = outcome.outcome.solution
  // const [message, setMessage] = outcome.outcome.message
  // const [easterEgg, setEasterEgg] = outcome.outcome.easterEgg
  // const [correct, setCorrect] = outcome.outcome.correct

useEffect(() => {
  console.log(outcome.outcome)
  localStorage.removeItem('key')
}, [])

  return (
    <div className="full file answers-container">
      <h2>{outcome.outcome.message}</h2>
      <div>
      <p className="answers-title">Jouw antwoord: </p>
       <div className="answers">
         <p>Kamer: {outcome.outcome.accusation.room}</p>
         <p>Wapen: {outcome.outcome.accusation.weapon}</p>
         <p>Suspect: {outcome.outcome.accusation.suspect}</p>
         </div>
         </div>
         <div>
      <p className="answers-title">Het juiste antwoord:</p>
        <div className="answers">
         <p>Kamer: {outcome.outcome.solution.room}</p>
         <p>Wapen: {outcome.outcome.solution.weapon}</p>
         <p>Suspect: {outcome.outcome.solution.suspect}</p>
         </div>
         </div>
    </div>
  );
};

export default GameOver;
