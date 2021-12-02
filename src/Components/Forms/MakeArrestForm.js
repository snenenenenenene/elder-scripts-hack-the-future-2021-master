import React, {useState, useEffect} from "react";
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
  const [response, setResponse] = useState("")
  const [clues, setClues] = useState([])

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

  const makeAccusation = (e) => {
    e.preventDefault()

    const json = JSON.stringify({
      "room": room,
    "weapon": weapon,
    "suspect": suspect
    });

    axios
  .post(`https://htf-2021.calibrate.be/api/cluedo/accuse?key=${gameKey}`,json,
   {auth: {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  },
     headers: {
    'Content-Type': 'application/json'
  }
  })
  .then((response) => {
    console.log(response)
    setResponse(response)
    setSuccess(true)
    if (response.data.correct === false) {
      onArrest(response.data)
      // alert(`${response.data.message} \n Het juiste antwoord was: \n Kamer: ${response.data.solution.room} Wapen: ${response.data.solution.weapon} Suspect: ${response.data.solution.suspect}`)
    }
  }
    )
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
      <h2>Maak een arrestatie</h2>
      <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <label htmlFor="room">Room</label>
        <select id="room" name="room" type="text" onChange={(e) => setRoom(e.target.value)}>
        {mapSelect("room")}
        </select>
        <label htmlFor="suspect">Suspect</label>
        <select id="suspect" name="suspect" type="text" onChange={(e) => setSuspect(e.target.value)}>
        {mapSelect("suspect")}
        </select>
        <label htmlFor="weapon">Weapon</label>
        <select id="weapon" name="weapon" type="text" onChange={(e) => setWeapon(e.target.value)}>
          {mapSelect("weapon")}
        </select>
      <p>Maak een formulier om een arrestatie te maken.</p>
      <Button
      value={success ? "Arrestatie Gedaan" : "Maak Arrestatie" }
       onClick={(e) => makeAccusation(e)}></Button>
      </form>
    </div>
  );
};
