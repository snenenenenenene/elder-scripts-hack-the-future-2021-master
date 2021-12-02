import React, { useEffect, useState } from "react";

/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {

  // const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    return rooms.map((i) => {
        return <div>
          <div> {i.title} </div>
          <img alt="soep" src={i.image} />
        </div>
    })
  }

  return (
    <div>
      <h3>Rooms</h3>
      <br/><br/>
      <div>
        <div>
          { getRooms() }
        </div>
      </div>
    </div>
  );
};
