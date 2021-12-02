import {useSettings} from "../context/useSettings";
import Button from "../Button";
import React, {useEffect, useState} from "react";


import axios from 'axios';


import Clues from "../Clues/Clues"
import Mansion from "./Mansion"


/*
   CLUEDO START
   ------------
   In dit component moet je een nieuw spel genereren via de api.
   Geef de nieuwe gameKey mee aan de onStart functie (zie props).
*/

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();
  const [responseData, setResponseData] = useState({})


  const startGame = () => {
    axios.get('https://htf-2021.calibrate.be/api/cluedo/clues', {
      auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD
      }
    })
        .then(results => {
          console.log(results)
          setResponseData(results.data)
        })
      }
    
      const mapResponse = () => {
        if (responseData != {}) {
          return (responseData.map((i) => (
              <div>
                <p>{i.id}. {i.type}: {i.title}</p>
              </div>
            ))
          )
        }
        else {
            return (<div>No Data</div>)
        }
    // Haal alle kamers en clues op 

    // Start mansion


    // Visualiseer kamers

  };

  return (
    <div className={"file full"}>
      <h2>Cluedo</h2>
      <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
