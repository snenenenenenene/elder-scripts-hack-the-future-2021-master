/*
   LOG
   ---------
   In dit component houd je de gemaakte suggesties bij.
*/

import React, { useEffect, useState } from "react";


const Log = ({ logEntries }) => {
  const [suggestions, setSuggestions] = useState(logEntries)

  return (
    <div className="log-container">
      <h3>Gemaakte suggesties</h3>
      <p>{suggestions}</p>
    </div>
  );
};

export default Log;
