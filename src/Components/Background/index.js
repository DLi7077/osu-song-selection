import useMousePosition from "../../Hooks/useMousePosition";
import "./styles.css";

export default function Background({ src }) {
  const mousePos = useMousePosition();
  // max scale 2%, spare 2.5% for vertical and horizontal
  const MAX_MARGIN_PERCENT = 1;
  const XPosOffset = (xPos) => (xPos * MAX_MARGIN_PERCENT) / window.innerWidth;
  const YPosOffset = (yPos) => (yPos * MAX_MARGIN_PERCENT) / window.innerHeight;

  const classes = {
    backgroundContainer: {
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
    !!src && (
      <div style={classes.backgroundContainer} className="appear">
        <img
          key={`rerender-${src}`}
          src={src}
          className="appear"
          style={classes.background}
          draggable={false}
          alt="moving background"
        />
      </div>
    )
  );
}
