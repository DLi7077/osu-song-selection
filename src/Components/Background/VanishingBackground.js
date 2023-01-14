import React from "react";
import useMousePosition from "../../Hooks/useMousePosition";

export default function VanishingBackground({ src }) {
  const mousePos = useMousePosition();
  const MAX_MARGIN_PERCENT = 1;
  const XPosOffset = (xPos) => (xPos * MAX_MARGIN_PERCENT) / 1920;
  const YPosOffset = (yPos) => (yPos * MAX_MARGIN_PERCENT) / 1080;

  const classes = {
    background: {
      objectFit: "cover",
      objectPosition: "center center",
      transform: `scale(1.02) translate(-${XPosOffset(
        mousePos.x
      )}%, -${YPosOffset(mousePos.y)}%)`,
      position: "fixed",
      zIndex: -2,
      width: "100%",
      filter: "brightness(70%)",
    },
  };

  return <img src={src} style={classes.background} alt="previous background" />;
}
