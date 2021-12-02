/*
   LOG
   ---------
   In dit component houd je de gemaakte suggesties bij.
*/

import React, { useEffect } from "react";

const Log = (logEntries) => {
  // const [suggestions, setSuggestions] = logEntries

  useEffect(() => {
    console.log("LOG ENTRIES")
    console.log(logEntries)
  }, [])

  return (
    <div>
      <h3 className="log-h3">Gemaakte suggesties</h3>
      <div className="log-container">
      <p>Room: {logEntries.logEntries[0]?.Room}</p>
      <p>Suspect: {logEntries.logEntries[0]?.suspect}</p>
      <p>Weapon: {logEntries.logEntries[0]?.Weapon}</p>
      </div>
    </div>
  );
};

export default Log;
