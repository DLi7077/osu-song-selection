import "./styles.css";
import Song from "./Song";
import hoverTick from "../../Assets/Audio/song-hover.wav";
import useAudio from "../../Hooks/useAudio";

export default function SongMenu(props) {
  const [hoverAudio] = useAudio({ audio_file: hoverTick, volume: 1 });
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
            hoverAudio.play();
          }}
        />
      ))}
    </div>
  );
}
