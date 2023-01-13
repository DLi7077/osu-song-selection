import { useState, useRef, useEffect } from "react";
import "./styles.css";

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

  function computeDivWidth(yPos) {
    const MAX_WIDTH = 370;
    const HEIGHT = 130;
    const MID_POINT = 1080 / 2 - HEIGHT / 2;
    const growth =
      MAX_WIDTH + Math.max(0, (MID_POINT - Math.abs(MID_POINT - yPos)) / 10);
    return growth;
  }

  return (
    <div className="song-item-wrapper">
      <div
        className="song-item"
        ref={ref}
        style={{
          width: `${computeDivWidth(y)}px`,
          height: "130px",
        }}
      >
        {computeDivWidth(y)}
      </div>
    </div>
  );
}
