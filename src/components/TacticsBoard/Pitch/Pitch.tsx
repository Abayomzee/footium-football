import Background from "./Background/Background";
import classes from "./Pitch.module.css";
import { PitchProps } from "../types";

const Pitch: React.FC<PitchProps> = ({ firstEleven, onDropPlayer }) => (
  <div className={classes.container}>
    <Background firstEleven={firstEleven} onDropPlayer={onDropPlayer} />
  </div>
);

export default Pitch;
