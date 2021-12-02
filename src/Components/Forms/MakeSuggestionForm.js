import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSettings } from "../context/useSettings";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  // const { settings } = useSettings();

  const [weapon, setWeapon] = useState(null)
  const [suspect, setSuspect] = useState(null)
  
  const handleChange = (event) => {
    setWeapon(event.weapon);
    setSuspect(event.suspect)
  }

  const handleSubmit = (event) => {
    console.log("object")
    console.log(event)
    // axios.post("https://htf-2021.calibrate.be/api/cluedo/guess?key={$gameKey}", {
    //   room: selectedRoom,
    //   weapon: weapon,
    //   suspect: suspect
    // }).then((response) =>
    //   console.log(response)
    // )
    // event.preventDefault();
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weapon:
          <input type="text" name="weapon" value={weapon} onChange={handleChange} />
        </label>
        <label>
          Suspect:
          <input type="text" name="suspect" value={suspect} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
