import SoundPlayer from "./SoundPlayer";
import { StyledSoundPlayers } from "../styles/SoundPlayers.styled";

interface Props {
  activeSound: string | null;
  setActiveSound: (sound: string) => void;
  volumes: Record<string, number>;
}

const SOUNDS = {
  rain: "rain.mp3",
  fire: "fireplace.mp3",
  wind: "storm.mp3",
  bird: "bird.mp3",
  moon: "night.mp3",
  coffee: "restaurant.mp3",
};

const SoundPlayers = ({ activeSound, setActiveSound, volumes }: Props) => {
  return (
    <StyledSoundPlayers>
      {Object.entries(SOUNDS).map(([name, file]) => (
        <SoundPlayer
          key={name}
          soundName={name}
          audioFileName={file}
          volume={volumes[name]}
          isActive={activeSound === name}
          onSelect={() => setActiveSound(name)}
        />
      ))}
    </StyledSoundPlayers>
  );
};

export default SoundPlayers;
