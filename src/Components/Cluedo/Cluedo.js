import { Switch } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import CluedoActive from "./CluedoActive";
import GameOver from "./CluedoEnd";
import CluedoStart from "./CluedoStart";
import { useSettings } from "../context/useSettings";

const Cluedo = () => {
  const { settings } = useSettings();
  const [gameKey, setKey] = useState(localStorage?.getItem('key'))
  const [gameOver, setGameOver] = useState(null);

  const handleEndGame = useCallback(() => {
    setKey(null);
    setGameOver(null);
    localStorage.removeItem('key')
  }, []);

  useEffect(() => {
    console.log(gameOver)
  }, [gameOver])

  return settings ? (
    <Switch>
      {!gameKey && <CluedoStart onStart={setKey} />}
      {gameOver && <GameOver outcome={gameOver} />}
      <CluedoActive
        gameKey={gameKey}
        onEndGame={handleEndGame}
        onArrest={setGameOver}
      />
    </Switch>
  ) : null;
};

export default Cluedo;
