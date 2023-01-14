import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import sleep from "./Utils/sleep";
import hoverSound from "./Assets/Audio/song-hover.wav";

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [audio, setAudio] = useState(SONGS[songIndex].audio);
  const hoverAudio = new Audio(hoverSound);
  hoverAudio.volume = 0.5;

  async function raiseVolume(audio) {
    const delay = 100;
    audio.volume = 0.01;

    for (let i = 0; i < 10; i++) {
      await sleep(delay).then(() => {
        audio.volume += 0.025;
      });
    }
  }

  function playHoverSound() {
    hoverAudio.play();
  }

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
