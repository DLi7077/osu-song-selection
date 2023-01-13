import Background from "./Components/Background";
import siesta from "./Assets/Backgrounds/koko-de-ikiteiru.jpg";
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
