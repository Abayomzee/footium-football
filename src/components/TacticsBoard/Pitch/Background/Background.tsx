import PlayerCard from "../../PlayerCard/PlayerCard";
import classes from "./Background.module.css";
import { PitchProps } from "../../types";
import { Player } from "../../../../utility/types";
import PlayerContainer from "../../PlayerContainer/PlayerContainer";

const Background: React.FC<PitchProps> = ({ firstEleven, onDropPlayer }) => {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        {firstEleven.map((player: Player, index: any) => (
          <PlayerContainer
            index={index}
            key={index}
            positionType="start"
            onDropPlayer={onDropPlayer}
          >
            <>
              {player ? (
                <PlayerCard
                  key={player.id}
                  player={player}
                  playerType="start"
                  index={index}
                  onDropPlayer={onDropPlayer}
                />
              ) : (
                ""
              )}
            </>
          </PlayerContainer>
        ))}
        <div className={classes.pitchDesign}>
          <div className={classes.homeBox}>
            <div className={classes.goal} />
            <div className={classes.pkBox} />
          </div>
          <div className={classes.center}>
            <div className={classes.line} />
            <div className={classes.circle} />
          </div>
          <div className={classes.awayBox}>
            <div className={classes.goal} />
            <div className={classes.pkBox} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
