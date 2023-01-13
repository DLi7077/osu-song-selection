import React from "react";
import "./styles.css";
import { SONGS } from "../../Constants/songs";
import Song from "./Song";

export default function SongMenu() {
  return (
    <div className="song-menu">
      {SONGS.map((song) => (
        <Song song={song} />
      ))}
    </div>
  );
}
