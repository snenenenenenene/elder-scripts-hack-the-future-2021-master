import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSettings } from "../context/useSettings";
import Button from "../Button";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom, newLog }) => {
  const { settings } = useSettings();

  const [weapon, setWeapon] = useState(null)
  const [suspect, setSuspect] = useState(null)
  
  const handleSubmit = (e) => {

    const json = JSON.stringify({
      "room": selectedRoom,
      "weapon": weapon,
      "suspect": suspect
    });

    axios.post(`https://htf-2021.calibrate.be/api/cluedo/guess?key=${gameKey}`, json)
    .then((response) => {
    
      {
          newLog(json)
      }
    
    }
    )
    e.preventDefault();
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <label htmlFor="suspect">Suspect</label>
        <input id="suspect" name="suspect" type="text" onChange={(e) => setSuspect(e.target.value)}/>
        <label htmlFor="weapon">Weapon</label>
        <input id="weapon" name="weapon" type="text" onChange={(e) => setWeapon(e.target.value)}/>
      <p>Maak een formulier om een arrestatie te maken.</p>
      <Button value="Maak suggestie" onClick={(e) => handleSubmit(e)}></Button>
      </form>
    </div>
  );
};
