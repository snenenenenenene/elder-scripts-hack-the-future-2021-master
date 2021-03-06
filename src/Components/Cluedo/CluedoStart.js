import { useSettings } from "../context/useSettings";
import Button from "../Button";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Mansion from "./Mansion";
import useAxios from "../../Hooks/useAxios";

/*
   CLUEDO START
   ------------
   In dit component moet je een nieuw spel genereren via de api.
   Geef de nieuwe gameKey mee aan de onStart functie (zie props).
*/

const CluedoStart = ({ onStart }) => {
  const [gameKey] = useAxios("https://htf-2021.calibrate.be/api/cluedo/new-game");
  const [token] = useAxios("https://htf-2021.calibrate.be/session/token");
  const { settings } = useSettings();

  const startGame = () => {
    console.log("TOKEN: " +  token)
    localStorage.setItem('key', gameKey.data.key)
    // localStorage.setItem('token', token.data)
    window.location.reload()
  };

  return (
    <div className={"file full"}>
      <h2>Cluedo</h2>
        <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
