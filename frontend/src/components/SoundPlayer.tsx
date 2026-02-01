import { useState } from "react";
import PropTypes from "prop-types";
import ReactHowler from "react-howler";
import Slider from "./Slider";
import IconButton from "./IconButton";
import { StyledSoundPlayer } from "../styles/SoundPlayer.styled";

interface Props {
  soundName: string;
  audioFileName: string;
  volume: number;
  isActive: boolean;
  onSelect: () => void;
}

const buttonSound = new Audio("button_sound.mp3");
buttonSound.volume = 0.2;

const SoundPlayer = ({
  soundName,
  audioFileName,
  volume,
  isActive,
  onSelect,
}: Props) => {
  const [playing, setPlaying] = useState(true);

  const toggleAudioPlay = () => {
    onSelect();
    setPlaying((p) => !p);
  };

  return (
    <StyledSoundPlayer
      className={isActive ? "active" : ""}
      onClick={onSelect}
    >
      <IconButton
        onClick={toggleAudioPlay}
        icon={soundName}
        height={40}
        width={40}
        color={playing ? "#090909" : "#7e7e7e"}
      />

      <ReactHowler
        src={audioFileName}
        playing={playing}
        loop
        volume={volume}
      />
    </StyledSoundPlayer>
  );
};
SoundPlayer.propTypes = {
  soundName: PropTypes.string,
  audioFileName: PropTypes.string,
};

export default SoundPlayer;
