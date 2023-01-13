import { useState, useEffect } from "react";

export default function Background({ src }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

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
      transform: `scale(1.075) translate(-${XPosOffset(
        mousePos.x
      )}%, -${YPosOffset(mousePos.y)}%)`,
      position: "fixed",
      zIndex: -2,
      width: "100%",
      filter: 'brightness(80%)'
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
