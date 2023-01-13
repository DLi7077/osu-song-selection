import Background from "./Components/Background";
import siesta from "./Assets/Backgrounds/siesta.jpg";
import SongMenu from "./Components/SongMenu";

function App() {
  return (
    <div>
      <Background src={siesta} />
      <SongMenu />
    </div> 
  );
}

export default App;
