import "./styles.css";
import Song from "./Song";

export default function SongMenu(props) {
  
  return (
    <div className="song-menu">
      {props.songs.map((song, idx) => (
        <Song
          song={song}
          key={`song-${idx}`}
          index={idx}
          updateSelectedIndex={props.updateSelectedIndex}
          isSelected={idx === props.songIndex}
        />
      ))}
    </div>
  );
}
