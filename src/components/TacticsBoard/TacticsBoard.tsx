import React, { useState, useEffect } from "react";
import { team1 } from "../../data";
import Pitch from "./Pitch/Pitch";
import Substitute from "./Substitute/Substitute";
import classes from "./TacticsBoard.module.css";
import { setFirstElevenPlayers } from "../../utility/helper";
import { MovedPlayer, TeamType } from "./types";
import PlayerContainer from "./PlayerContainer/PlayerContainer";

const TacticsBoard: React.FC = () => {
  // States
  const [firstEleven, setFirstEleven] = useState<any[]>([]);
  const [sub, setSub] = useState<any[]>([]);

  // Effects
  useEffect(() => {
    setFirstEleven([...setFirstElevenPlayers()]);
    setSub(team1.subs);
  }, []);

  // Handlers
  /**
   *
   * @param player
   * @param index
   * @param positionType
   */
  const movePlayer = (
    player: MovedPlayer,
    index?: any,
    positionType?: TeamType
  ) => {
    const firstTeam = [...firstEleven];
    const subTeam = [...sub];

    // Add to starting eleven
    if (player.type === "sub" && positionType === "start") {
      const playerToSubOut = firstTeam[index];
      const playerToSubIn = subTeam[player.index];

      firstTeam.splice(index, 1, playerToSubIn);
      subTeam.splice(player.index, 1, playerToSubOut);

      setFirstEleven(firstTeam);
      setSub(subTeam);
    }

    // Remove From starting eleven
    else if (player.type === "start" && positionType === "sub") {
      const playerToSubIn = subTeam[index];
      const playerToSubOut = firstTeam[player.index];

      firstTeam.splice(player.index, 1, playerToSubIn);
      subTeam.splice(index, 1, playerToSubOut);

      setFirstEleven(firstTeam);
      setSub(subTeam);
    }

    // Change Position of starting eleven players
    else if (player.type === "start" && positionType === "start") {
      const player1 = firstTeam[index];
      const player2 = firstTeam[player.index];

      firstTeam.splice(index, 1, player2);
      firstTeam.splice(player.index, 1, player1);

      setFirstEleven(firstTeam);
      setSub(subTeam);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.board}>
        <Pitch firstEleven={firstEleven} onDropPlayer={movePlayer} />
      </div>
      <div className={classes.subsCol}>
        {sub?.map((player, idx) => (
          <PlayerContainer
            index={idx}
            key={idx}
            onDropPlayer={movePlayer}
            positionType="sub"
          >
            <Substitute
              key={player.id}
              player={player}
              playerType="sub"
              onDropPlayer={movePlayer}
              index={idx}
            />
          </PlayerContainer>
        ))}
      </div>
    </div>
  );
};

export default TacticsBoard;
