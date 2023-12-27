import React from "react";
import { players } from "../players";
import Player from "../component/Player";

function PlayersList() {
  return (
    <div className="players">
      {players.map((playerData) => (
        <Player key={playerData.id} {...playerData} />
      ))}
    </div>
  );
}

export default PlayersList;
