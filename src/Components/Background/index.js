import useMousePosition from "../../Hooks/useMousePosition";
import "./styles.css";

export default function Background({ src }) {
  const mousePos = useMousePosition();
  // max scale 10%, spare 2.5% for vertical and horizontal
  const MAX_MARGIN_PERCENT = 1;
  const XPosOffset = (xPos) => (xPos * MAX_MARGIN_PERCENT) / 1920;
  const YPosOffset = (yPos) => (yPos * MAX_MARGIN_PERCENT) / 1080;

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
      backgroundColor: "black",
      padding: "100%",
      paddingInline: 0,
    },
  };

  return (
    !!src && (
      <div style={classes.backgroundContainer} className={!!src && "appear"}>
        <img
          key={`rerender-${src}`}
          src={src}
          className={`${!!src && "appear"}`}
          style={classes.background}
          draggable={false}
          alt="moving background"
        />
      </div>
    )
  );
}
