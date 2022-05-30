import React from "react";
import { ReactComponent as ProfileSvg } from "../../../assets/svgs/profile.svg";
import { Player } from "../../../../types";

import classes from "./Substitute.module.css";
import { useDrag } from "react-dnd";

interface MyProps {
  player: Player;
  playerType: string;
  onDropPlayer: (item: any, i: any) => void;
  index?: any;
}

const Substitute: React.FC<MyProps> = (props) => {
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
        onDropPlayer(item, index);
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
        <div className={classes.playerPersonalInfo}>
          <ProfileSvg className={classes.profile} />
          <div className={classes.playerName}>{player.name.firstName}</div>
        </div>
      </div>
      <div className={classes.position}>{player.playerPosition.position}</div>
    </div>
  );
};
export default Substitute;
