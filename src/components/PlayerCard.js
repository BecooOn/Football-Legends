import React, { useState } from "react";

const PlayerCard = ({ player }) => {
  const [showStatistics, setShowStatistics] = useState(false);
  function handleShowStatistics() {
    setShowStatistics(!showStatistics);
  }
  // console.log(player.official_career);
  return (
    <>
      (
      <div onClick={handleShowStatistics} className="card">
        {!showStatistics ? (
          <div className="img-container">
            <img src={player.img} alt="" />
          </div>
        ) : (
          <>
            <h2 className="card-info">{player.name}</h2>
            <ul className="statisticList">
              {player.statistics.map((statistic, index) => (
                <li key={index}>{statistic}</li>
              ))}
            </ul>
            <li key={player.official_career} className="career">
              {player.official_career}
            </li>
          </>
        )}
      </div>
      )
    </>
  );
};

export default PlayerCard;
