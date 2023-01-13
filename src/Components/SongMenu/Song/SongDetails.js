import React from "react";
import thumbnail from "../../../Assets/SongMenu/natsuiro-fubuki-tanmoshi.jpg";
import starIcon from "../../../Assets/SongMenu/star.png";

export default function SongDetails({
  title,
  artist,
  difficulty,
  star_rating,
  background,
}) {
  function StarRating({ rating }) {
    let fullStars = [];
    const wholeStars = Math.trunc(rating);
    const partStar = rating - wholeStars;
    for (let star = 0; star < wholeStars; star++) {
      fullStars.push(
        <img src={starIcon} style={{ width: "24px" }} alt="star rating" />
      );
    }

    fullStars.push(
      <img
        src={starIcon}
        style={{ width: `${Math.max(16, 24 * partStar)}px` }}
      />
    );

    return fullStars;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        height: "109px",
        padding: "11px",
        paddingInline: "8px",
      }}
    >
      <img
        src={background}
        style={{
          width: "160px",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "1rem", height: "100%" }}>
        <div style={{ fontSize: "1.75rem" }}>{title}</div>
        <div style={{ fontSize: "1.15rem" }}>{artist}</div>
        <div style={{ fontSize: "1.25rem" }}>
          <b>{difficulty}</b>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <StarRating rating={star_rating} />
        </div>
      </div>
    </div>
  );
}
