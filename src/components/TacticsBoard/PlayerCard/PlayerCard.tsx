import React from "react";
import { ReactComponent as ProfileSvg } from "../../../assets/svgs/profile.svg";
import classes from "./PlayerCard.module.css";
import { useDrag } from "react-dnd";
import { PlayerCardProps } from "../types";

const PlayerCard: React.FC<PlayerCardProps> = (props) => {
  const { player, onDropPlayer, playerType, index } = props;

  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({
      type: playerType,
      index,
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`${classes.container} ${
        isDragging ? classes.isDraggingPlayer : ""
      }`}
      ref={dragRef}
    >
      <div className={classes.jerseyWrapper}>
        <img
          src={
            player.isGk
              ? "/assets/images/gk-jersey.png"
              : "/assets/images/player-jersey.png"
          }
          alt="jersey"
          className={classes.jersey}
        />
        <div className={classes.jerseyNumber}>{player.jerseyNumber}</div>
      </div>
      <div className={classes.playerInfo}>
        <div className={classes.playerPosStats}>
          <div className={classes.circle}></div>
          <div className={classes.position}>
            {player.playerPosition.position}
          </div>
        </div>
        <div className={classes.playerPersonalInfo}>
          <ProfileSvg className={classes.profile} />
          <div className={classes.playerName}>{player.name.firstName}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
