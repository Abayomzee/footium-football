import { Player } from "../../utility/types";

export type TeamType = "sub" | "start";

export interface MovedPlayer {
  type: TeamType;
  index: number;
}

export interface PitchProps {
  firstEleven: Player[];
  onDropPlayer: (player: MovedPlayer) => void;
}

export interface PlayerContainerProps {
  children: JSX.Element;
  index: any;
  positionType: TeamType;
  onDropPlayer: (
    player: MovedPlayer,
    index: any,
    positionType: TeamType
  ) => void;
}

export interface PlayerCardProps {
  player: Player;
  playerType: TeamType;
  onDropPlayer: (player: MovedPlayer) => void;
  index?: any;
}
