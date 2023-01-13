import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import sleep from "./Utils/sleep";

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [audio] = useState(new Audio(SONGS[songIndex].audio));

  async function raiseVolume(audio) {
    const delay = 400;
    audio.volume = 0.1;
    await sleep(delay);
    audio.volume += 0.1;
    await sleep(delay);
    audio.volume += 0.1;
    await sleep(delay);
    audio.volume += 0.1;
  }


  useEffect(() => {
    audio.loop = true;

    audio.setAttribute("src", SONGS[songIndex].audio); //change the source
    audio.load();
    audio.currentTime = 48;
    audio.play();
    raiseVolume(audio);
  }, [songIndex]);

  return (
    <div>
      <Background src={SONGS[songIndex].background} />
      <SongMenu
        songs={SONGS}
        updateSelectedIndex={(index) => {
          if (index === songIndex) return;
          setSongIndex(index);
        }}
      />
    </div>
  );
}

export default App;
