import { useState } from "react";
import sleep from "../Utils/sleep";

export default function useAudio({ audio_file, volume }) {
  const [audio, setAudio] = useState(new Audio(audio_file ?? null));

  audio.volume = volume ?? 0.5;

  async function raiseVolume(audio) {
    const delay = 100; // ms
    const iterations = 5; // rate at which volume is raised
    const endingVolume = audio.volume;
    const startingVolume = 0;

    audio.volume = startingVolume;

    const volumeIncrementStep = (endingVolume - startingVolume) / iterations;

    while (audio.volume < endingVolume) {
      await sleep(delay).then(() => {
        audio.volume = Math.min(
          audio.volume + volumeIncrementStep,
          endingVolume
        );
      });
    }
  }

  return [audio, setAudio, raiseVolume];
}
