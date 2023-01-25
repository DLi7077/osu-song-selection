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
    window.addEventListener("scroll", updateY);
    return () => {
      window.removeEventListener("scroll", updateY);
    };
  }, []);

  const HEIGHT = 130;
  const WIDTH = 1000;

  function computeDivGrowth(yPos) {
    const MID_POINT = 1080 / 2 - HEIGHT;
    const growth = Math.max(0, (Math.abs(MID_POINT - yPos) * 12) / 100);
    return growth;
  }

  const defaultOffset = 120
  const classes = {
    default: {
      transition: "all 1000ms cubic-bezier(.27,.75,.36,.96)",
      transform: `translate(${computeDivGrowth(y) + defaultOffset + 100}px)`,
    },
    hovering: {
      transform: `translate(${computeDivGrowth(y) + defaultOffset + 10}px)`,
      margin: 0,
    },
    selected: {
      transform: `translate(${computeDivGrowth(y) + defaultOffset}px)`,
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
          ...(isHovering && props.isSelected
            ? {
                transform: `translate(${computeDivGrowth(y) + 20}px)`,
                margin: "1rem",
              }
            : {}),
        }}
        onClick={() => {
          props.updateSelectedIndex(props.index);
          const { height, y } = ref.current.getBoundingClientRect();

          const screenCenter = 1080 / 2;
          const divCenter = height;
          const shouldBeAt = Math.max(
            0,
            y + window.scrollY - screenCenter + divCenter
          );

          window.scrollTo({
            top: shouldBeAt,
            left: 0,
            behavior: "smooth",
          });
        }}
        onMouseEnter={() => {
          setHovering(true);
          props.playHoverSound();
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <img
          src={require("../../../Assets/SongMenu/menu-button-background.png")}
          style={{
            width: `${WIDTH}px`,
            height: `${HEIGHT}px`,
            //https://stackoverflow.com/a/50391532
            filter: `sepia(100%) saturate(300%) brightness(80%) hue-rotate(${
              props.isSelected ? 0 : 170
            }deg)`,
            opacity: 0.9,
          }}
          alt="menu select background"
        />
        <div
          style={{
            position: "absolute",
            height: "100%",
            top: 0,
            width: "100%",
          }}
        >
          <SongDetails
            title={props.song.title}
            artist={props.song.artist}
            difficulty={props.song.difficulty}
            star_rating={props.song.star_rating}
            background={props.song.background}
            isSelected={props.isSelected}
          />
        </div>
        <div style={classes.tint} />
      </div>
    </div>
  );
}
