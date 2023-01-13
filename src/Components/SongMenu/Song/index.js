import { useState, useRef, useEffect } from "react";
import SongDetails from "./SongDetails";

export default function Song(props) {
  const ref = useRef();

  const [y, setY] = useState(0);

  function updateY() {
    if (!ref.current) return;
    setY(ref.current.getBoundingClientRect().y);
  }

  useEffect(() => {
    updateY();
    window.addEventListener("scroll", updateY);
    return () => {
      window.addEventListener("scroll", updateY);
    };
  }, []);

  const HEIGHT = 130;
  const WIDTH = 700;

  function computeDivGrowth(yPos) {
    const MID_POINT = 1080 / 2 - HEIGHT / 2;
    const growth = Math.max(0, (Math.abs(MID_POINT - yPos) * 12) / 100);
    return growth;
  }

  return (
    <div className="song-item-wrapper">
      <div
        className="song-item"
        ref={ref}
        style={{
          transform: `translate(${computeDivGrowth(y)}px)`,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", height: "100%", zIndex: 1 }}>
          <SongDetails
            title={props.song.title}
            artist={props.song.artist}
            difficulty={props.song.difficulty}
            star_rating={props.song.star_rating}
            background={props.song.background}
          />
        </div>
        <img
          src={require("../../../Assets/SongMenu/menu-button-background.png")}
          style={{
            top: 0,
            width: `${WIDTH}px`,
            height: `${HEIGHT}px`,
            //https://stackoverflow.com/a/50391532
            filter:
              "sepia(100%) saturate(300%) brightness(70%) hue-rotate(170deg)",
          }}
        />
      </div>
    </div>
  );
}
