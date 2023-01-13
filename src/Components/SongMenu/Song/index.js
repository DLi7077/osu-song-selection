import { useState, useRef, useEffect } from "react";

export default function Song(props) {
  const ref = useRef();

  const [y, setY] = useState(0);

  function updateY(event) {
    console.log(event);
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
        }}
      >
        <img
          src={require("../../../Assets/SongMenu/menu-button-background.png")}
          style={{
            position: "absolute",
            top: 0,
            width: `${WIDTH}px`,
            height: `${HEIGHT}px`,
            position: "relative",
          }}
        />
      </div>
    </div>
  );
}
