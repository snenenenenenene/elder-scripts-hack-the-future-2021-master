import React, {useState} from "react";
import { useSettings } from "../context/useSettings";
import axios from 'axios'
import Button from "../Button";
/*
   HET ARRESTATIE FORMULIER
   ------------------------
   Maak hier een formulier om een arrestatie te verrichten.
*/

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();
  const [success, setSuccess] = useState(false)
  const [room, setRoom] = useState("")
  const [suspect, setSuspect] = useState("")
  const [weapon, setWeapon] = useState("")


  const makeAccusation = (e) => {
    e.preventDefault()
    axios
  .post(`https://htf-2021.calibrate.be/api/cluedo/accuse?key=${gameKey}`, {
    "room": room,
  "weapon": weapon,
  "suspect": suspect
  },
   {
    auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    },
  })
  .then(() => setSuccess(false)
    )
  }

  return (
    <div>
      <h2>Maak een arrestatie</h2>
      <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <label htmlFor="room">Room</label>
        <input id="room" name="room" type="text" onChange={(e) => setRoom(e.target.value)}/>
        <label htmlFor="suspect">Suspect</label>
        <input id="suspect" name="suspect" type="text" onChange={(e) => setSuspect(e.target.value)}/>
        <label htmlFor="weapon">Weapon</label>
        <input id="weapon" name="weapon" type="text" onChange={(e) => setWeapon(e.target.value)}/>
      <p>Maak een formulier om een arrestatie te maken.</p>
      <Button value="Maak arrestatie" onClick={(e) => makeAccusation(e)}></Button>
      </form>
    </div>
  );
};
