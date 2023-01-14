import { useState, useRef, useEffect } from "react";
import SongDetails from "./SongDetails";

export default function Song(props) {
  const ref = useRef();
  const [y, setY] = useState(0);
  const [isHovering, setHovering] = useState(false);

  function updateY() {
    if (!ref.current) return;
    setY(ref.current.getBoundingClientRect().y);
  }

  useEffect(() => {
    updateY();
    window.addEventListener("wheel", updateY);
    return () => {
      window.removeEventListener("wheel", updateY);
    };
  }, []);

  const HEIGHT = 130;
  const WIDTH = 1000;

  function computeDivGrowth(yPos) {
    const MID_POINT = 1080 / 2 - HEIGHT;
    const growth = Math.max(0, (Math.abs(MID_POINT - yPos) * 10) / 100);
    return growth;
  }

  const classes = {
    default: {
      transition: "all 500ms ease-out",
      transform: `translate(${computeDivGrowth(y) + 200}px)`,
    },
    hovering: {
      transform: `translate(${computeDivGrowth(y) + 150}px)`,
      margin: 0,
    },
    selected: {
      transform: `translate(${computeDivGrowth(y) + 100}px)`,
      margin: 0,
    },
  };

  return (
    <div className="song-item-wrapper">
      <div
        className="song-item"
        ref={ref}
        style={{
          ...classes.default,
          ...(isHovering ? classes.hovering : {}),
          ...(props.isSelected ? classes.selected : {}),
          ...(isHovering && props.isSelected ? { margin: "1rem" } : {}),
        }}
        onClick={() => {
          props.updateSelectedIndex(props.index);
        }}
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
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
            filter: `sepia(100%) saturate(300%) brightness(70%) hue-rotate(${
              props.isSelected ? 0 : 170
            }deg)`,
          }}
          alt="menu select background"
        />
      </div>
    </div>
  );
}
