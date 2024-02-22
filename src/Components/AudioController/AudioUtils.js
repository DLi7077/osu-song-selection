import sleep from "../../Utils/sleep";
import { SONGS } from "../../Constants/songs";

export async function raiseVolume(audio) {
  const delayMs = 50; // ms delay between volume change
  const iterations = 25; // rate at which volume is raised
  const endingVolume = 0.25;
  const startingVolume = 0;

  audio.volume = startingVolume;

  const volumeIncrementStep = (endingVolume - startingVolume) / iterations;

  while (audio.volume < endingVolume) {
    await sleep(delayMs).then(() => {
      audio.volume = Math.min(audio.volume + volumeIncrementStep, endingVolume);
    });
  }
}

export function playMusic(currentSong) {
  currentSong.audio_track.preload = false; // enable lazy load
  currentSong.audio_track.loop = true;
  currentSong.audio_track.currentTime =
    SONGS[currentSong.song_index].start_time ?? 0;
  currentSong.audio_track.play();

  raiseVolume(currentSong.audio_track);
}
