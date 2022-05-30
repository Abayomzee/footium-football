import { useDrop } from "react-dnd";
import { MovedPlayer, PlayerContainerProps } from "../types";
import classes from "./PlayerContainer.module.css";

const PlayerContainer: React.FC<PlayerContainerProps> = (props) => {
  const { children, index, onDropPlayer, positionType } = props;

  const [, dropRef] = useDrop({
    accept: ["sub", "start"],
    drop: (item: MovedPlayer, monitor) => {
      const dropResult = monitor.canDrop();

      if (item && dropResult) {
        onDropPlayer(item, index, positionType);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className={positionType === "start" ? classes.container : ""}
    >
      {children}
    </div>
  );
};

export default PlayerContainer;
