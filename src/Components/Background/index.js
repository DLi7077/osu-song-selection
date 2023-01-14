import useMousePosition from "../../Hooks/useMousePosition";
import "./styles.css";

export default function Background({ src }) {
  const mousePos = useMousePosition();
  // max scale 10%, spare 2.5% for vertical and horizontal
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

  return (
    <>
      {!!src && (
        <img
          key={`rerender-${src}`}
          src={src}
          className={`${!!src && "appear"}`}
          style={classes.background}
          draggable={false}
          alt="moving background"
        />
      )}
    </>
  );
}
