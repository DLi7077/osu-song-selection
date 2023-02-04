import { useState, useEffect } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";
import useAudio from "./Hooks/useAudio";
import VanishingBackground from "./Components/Background/VanishingBackground";
import FullscreenBar from "./Components/Startup/FullscreenBar";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "./Store/Reducers/music";

function App() {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [audio, setAudio, raiseVolume] = useAudio({
    audio_file: null,
    volume: currentSong.max_volume,
  });
  const [initialLoad, setInitialLoad] = useState(true);

  function playMusic() {
    audio.loop = true;
    audio.currentTime = SONGS[currentSong.song_index].start_time ?? 0;
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
            setAudio(SONGS[currentSong.song_index].audio); //change the source
          }}
        />
      )}
      <VanishingBackground src={SONGS[previousIndex].background} />
      <Background src={SONGS[currentSong.song_index].background} />
      <SongMenu
        songs={SONGS}
        songIndex={currentSong.song_index}
        updateSelectedIndex={(index) => {
          setPreviousIndex(currentSong.song_index);
          if (index === currentSong.song_index) return;
          audio.pause();
          setAudio(SONGS[index].audio); //change the source
          dispatch(changeSong(index));
        }}
      />
    </>
  );
}

export default App;
