import React, { useEffect, useState } from "react";
import axios from "axios";

import { MakeSuggestionForm } from "../Forms/MakeSuggestionForm";
/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    onSelectRoom(selectedRoom)
  }, [selectedRoom])


  const apiCall = () => {
    axios
      .get("https://htf-2021.calibrate.be/api/cluedo/clues", {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
      })
      .then((response) => setResponse(response.data)
      );
  }

  useEffect(() => {
    apiCall()
  }, [])

  const getRooms = () => {
    return response.map((i) => {
      if (i.type === "room") {
        return (
          <div onClick={() => setSelectedRoom(i.id)} className="image-container">
            <img
              alt="room"
              className="image"
              src={`${process.env.REACT_APP_BASE_URL}/${i.image}`}
            />
            <div className="centered-text"> {i.title} </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <h3>Rooms</h3>
      <br />
      <br />
      <div className="room-container">
        {getRooms()}
      </div>
    </div>
  );
};
