import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import sleep from "./Utils/sleep";

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [audio] = useState(new Audio(SONGS[songIndex].audio));

  async function raiseVolume(audio) {
    const delay = 150;
    audio.volume = 0;

    await sleep(200);
    audio.volume += 0.025;

    for (let i = 0; i < 8; i++) {
      await sleep(delay).then(() => {
        audio.volume += 0.05;
      });
    }
  }

  useEffect(() => {
    audio.loop = true;

    audio.setAttribute("src", SONGS[songIndex].audio); //change the source
    audio.load();
    audio.currentTime = 45;
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
          setSongIndex(index);
        }}
      />
    </div>
  );
}

export default App;
