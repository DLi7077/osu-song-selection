import "./styles.css";
import Song from "./Song";
import hoverTick from "../../Assets/Audio/song-hover.wav";
import { useRef } from "react";

export default function SongMenu(props) {
  const hoverAudioRef = useRef(new Audio(hoverTick ?? null));
  return (
    <div className="song-menu">
      {props.songs.map((song, idx) => (
        <Song
          song={song}
          key={`song-${idx}`}
          index={idx}
          updateSelectedIndex={props.updateSelectedIndex}
          isSelected={idx === props.songIndex}
          playHoverSound={() => {
            hoverAudioRef.current.play();
          }}
        />
      ))}
    </div>
  );
}
