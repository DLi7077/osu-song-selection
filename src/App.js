import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import useAudio from "./Hooks/useAudio";

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const { audio, setAudio, raiseVolume, playHoverSound } = useAudio();

  useEffect(() => {
    audio.loop = true;
    audio.currentTime = SONGS[songIndex].start_time ?? 0;
    audio.play();
    raiseVolume(audio);
    // eslint-disable-next-line
  }, [songIndex]);

  return (
    <div>
      <Background src={SONGS[songIndex].background} />
      <SongMenu
        songs={SONGS}
        songIndex={songIndex}
        updateSelectedIndex={(index) => {
          if (index === songIndex) return;
          audio.pause();
          setSongIndex(index);
          setAudio(SONGS[index].audio); //change the source
        }}
        playHoverSound={playHoverSound}
      />
    </div>
  );
}

export default App;
