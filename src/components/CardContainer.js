import React from "react";
import PlayerCard from "./PlayerCard";
const CardContainer = ({ data, search}) => {
  const filteredPlayer = data.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  return (
    <div className="card-container">
      {filteredPlayer.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default CardContainer;
