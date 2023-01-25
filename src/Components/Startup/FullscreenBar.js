export default function FullscreenBar(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={props.onClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "1rem",
        }}
      >
        <div style={{ fontSize: "1.75rem", paddingBottom: "1rem" }}>
          For the best intended experience, go fullscreen (F11)
        </div>

        <div style={{ fontSize: "1rem" }}>Click anywhere to continue</div>
      </div>
    </div>
  );
}
