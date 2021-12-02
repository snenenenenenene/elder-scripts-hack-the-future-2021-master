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
  const [clues, setClues] = useState([])

  const [weapon, setWeapon] = useState(null)
  const [suspect, setSuspect] = useState(null)
  
  useEffect(() => {
    axios
      .get("https://htf-2021.calibrate.be/api/cluedo/clues", {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
      })
      .then((results) => {
        console.log(results);
        setClues(results.data);
      });
  }, []);


  const handleSubmit = (e) => {

    const json = JSON.stringify({
      "room": selectedRoom,
      "weapon": weapon,
      "suspect": suspect
    });

    axios.post(`https://htf-2021.calibrate.be/api/cluedo/guess?key=${gameKey}`, json,
    {auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    },
       headers: {
      'Content-Type': 'application/json'
    }})
    .then((response) => {
    
      {
          console.log(response)
      }
    
    }
    )
    e.preventDefault();
  }

  const mapSelect = (type) => {
    return clues.map((i) => {
      if (i.type === type) {
        return (
          <option value={i.id}>{i.title}</option>
        )
      }
    })
  }

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
      <label htmlFor="suspect">Suspect</label>
        <select id="suspect" name="suspect" type="text" onChange={(e) => setSuspect(e.target.value)}>
        {mapSelect("suspect")}
        </select>
        <label htmlFor="weapon">Weapon</label>
        <select id="weapon" name="weapon" type="text" onChange={(e) => setWeapon(e.target.value)}>
          {mapSelect("weapon")}
        </select>
      <Button value="Maak suggestie" onClick={(e) => handleSubmit(e)}></Button>
      </form>
    </div>
  );
};
