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
    <div className="full file">
      <h2>{outcome.outcome.message}</h2>
      <p>Jouw antwoord: </p>
       <p>
         Kamer: {outcome.outcome.accusation.room}
         <p>Wapen: {outcome.outcome.accusation.weapon}</p>
         <p>Suspect: {outcome.outcome.accusation.suspect}</p>
         </p>
      <p>Het juiste antwoord:</p>
        <p>
          Kamer: {outcome.outcome.solution.room} Wapen: {outcome.outcome.solution.weapon} Suspect: {outcome.outcome.solution.suspect}</p>

    </div>
  );
};

export default GameOver;
