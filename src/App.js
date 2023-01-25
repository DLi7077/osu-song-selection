import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import useAudio from "./Hooks/useAudio";
import VanishingBackground from "./Components/Background/VanishingBackground";
import FullscreenBar from "./Components/Startup/FullscreenBar";

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const { audio, setAudio, raiseVolume, playHoverSound } = useAudio();
  const [initialLoad, setInitialLoad] = useState(true);

  function playMusic() {
    audio.loop = true;
    audio.currentTime = SONGS[songIndex].start_time ?? 0;
    audio.play();
    raiseVolume(audio);
  }

  useEffect(() => {
    if (initialLoad) return;

    playMusic();
    // eslint-disable-next-line
  }, [audio]);

  return (
    <>
      {initialLoad && (
        <FullscreenBar
          onClick={() => {
            setInitialLoad(false);
            setAudio(SONGS[songIndex].audio); //change the source
          }}
        />
      )}
      <VanishingBackground src={SONGS[previousIndex].background} />
      <Background src={SONGS[songIndex].background} />
      <SongMenu
        songs={SONGS}
        songIndex={songIndex}
        updateSelectedIndex={(index) => {
          setPreviousIndex(songIndex);
          if (index === songIndex) return;
          audio.pause();
          setPreviousIndex(songIndex);
          setSongIndex(index);
          setAudio(SONGS[index].audio); //change the source
        }}
        playHoverSound={playHoverSound}
      />
    </>
  );
}

export default App;
