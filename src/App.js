import { useState } from "react";
import FullscreenBar from "./Components/Startup/FullscreenBar";
import VanishingBackground from "./Components/Background/VanishingBackground";
import Background from "./Components/Background";
import SongMenu from "./Components/SongMenu";
import AudioController from "./Components/AudioController";
import { useDispatch, useSelector } from "react-redux";
import { changeSong, setLoaded } from "./Store/Reducers/music";
import { SONGS } from "./Constants/songs";

function App() {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music);
  const [previousIndex, setPreviousIndex] = useState(0);

  return (
    <>
      {!currentSong.loaded && (
        <FullscreenBar
          onClick={() => {
            dispatch(setLoaded(true));
            currentSong.audio_track.pause();
            dispatch(changeSong(0));
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
          currentSong.audio_track.pause();
          dispatch(changeSong(index));
        }}
      />
      <AudioController />
    </>
  );
}

export default App;
