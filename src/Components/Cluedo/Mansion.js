import React, { useEffect, useState } from "react";
import axios from "axios";
/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [response, setResponse] = useState([]);

const apiCall = async () => {
  await axios
  .get("https://htf-2021.calibrate.be/api/cluedo/clues", {
    auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    },
  })
  .then((response) => {
    setResponse(response.data)
  }
    );}

  useEffect( () => {
     apiCall()

     let _rooms = [];
    response.forEach((i) => {
      if (i.type === "room") {
        _rooms.push(i);
      }
      console.log(rooms)
    setRooms(_rooms);
  })
}, [])

  const getRooms = () => {
    return rooms.map((i) => {
      return (
        <div>
          <div> {i.title} </div>
          <img alt="soep" src={i.image} />
        </div>
      );
    });
  };

  return (
    <div>
      <h3>Rooms</h3>
      <br />
      <br />
      <div>
        <div>{getRooms()}</div>
      </div>
    </div>
  );
}
