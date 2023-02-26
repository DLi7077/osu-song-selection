import sleep from "../../Utils/sleep";
import { SONGS } from "../../Constants/songs";

export async function raiseVolume(audio) {
  const delay = 50; // ms
  const iterations = 25; // rate at which volume is raised
  const endingVolume = audio.volume;
  const startingVolume = 0;

  audio.volume = startingVolume;

  const volumeIncrementStep = (endingVolume - startingVolume) / iterations;

  while (audio.volume < endingVolume) {
    await sleep(delay).then(() => {
      audio.volume = Math.min(audio.volume + volumeIncrementStep, endingVolume);
    });
  }
}

export function playMusic(currentSong) {
  currentSong.audio_track.loop = true;
  currentSong.audio_track.currentTime =
    SONGS[currentSong.song_index].start_time ?? 0;
  currentSong.audio_track.play();
  
  raiseVolume(currentSong.audio_track);
}
