import { useSelector } from "react-redux";
import { useEffect } from "react";
import { playMusic } from "./AudioUtils";

export default function AudioController() {
  const currentSong = useSelector((state) => state.music);

  useEffect(() => {
    if (!currentSong.loaded) return;
    playMusic(currentSong);
  }, [currentSong]);

  return <div></div>;
}
