import React from "react";
import useMousePosition from "../../Hooks/useMousePosition";
import "./styles.css";

export default function VanishingBackground({ src }) {
  const mousePos = useMousePosition();
  const MAX_MARGIN_PERCENT = 1;
  const XPosOffset = (xPos) => (xPos * MAX_MARGIN_PERCENT) / 1920;
  const YPosOffset = (yPos) => (yPos * MAX_MARGIN_PERCENT) / 1080;

  const classes = {
    backgroundContainer: {
      outline: "1px solid lime",
      zIndex: -2,
      position: "fixed",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    background: {
      width: "100%",
      transform: `scale(1.02) translate(-${XPosOffset(
        mousePos.x
      )}%, -${YPosOffset(mousePos.y)}%)`,
      zIndex: -2,
      filter: "brightness(70%)",
    },
  };

  return (
    <div style={classes.backgroundContainer}>
      <img
        src={src}
        style={classes.background}
        alt="previous background"
      />
    </div>
  );
}
