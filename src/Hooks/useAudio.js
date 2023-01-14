import { useState } from "react";
import sleep from "../Utils/sleep";
import hoverSound from "../Assets/Audio/song-hover.wav";

export default function useAudio() {
  const [audio, setAudio] = useState(new Audio());
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

  return {
    audio,
    setAudio,
    raiseVolume,
    playHoverSound,
  };
}
