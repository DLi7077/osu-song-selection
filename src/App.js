import { useState } from "react";
import Background from "./Components/Background";
import { SONGS } from "./Constants/songs";
import SongMenu from "./Components/SongMenu";

function App() {
  const [songIndex, setSongIndex] = useState(0);

  return (
    <div>
      <Background
        src={SONGS[songIndex].background}
      />
      <SongMenu
        songs={SONGS}
        updateSelectedIndex={(index) => {
          setSongIndex(index);
        }}
      />
    </div>
  );
}

export default App;
