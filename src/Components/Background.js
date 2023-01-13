import { useState, useEffect } from "react";

export default function Background({ src }) {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // console.log(mousePos);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  // max scale 10%, spare 2.5% for vertical and horizontal
  const MAX_MARGIN_PERCENT = 2.5;
  const XPosOffset = (xPos) => (xPos * MAX_MARGIN_PERCENT) / 1920;
  const YPosOffset = (yPos) => (yPos * MAX_MARGIN_PERCENT) / 1080;

  const classes = {
    background: {
      objectFit: "cover",
      transform: `scale(1.05) translate(-${XPosOffset(
        mousePos.x
      )}%, -${YPosOffset(mousePos.y)}%)`,
    },
  };

  return (
    <img
      src={src}
      style={classes.background}
      draggable={false}
      alt="moving background"
    />
  );
}
