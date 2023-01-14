import React from "react";
import starIcon from "../../../Assets/SongMenu/star.png";

const classes = {
  fullStar: { width: "24px" },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    height: "108px",
    width: "100%",
    position:'relative'
  },
  thumbnail: {
    width: "160px",
    height: "100%",
    objectFit: "cover",
  },
  tint: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

export default function SongDetails({
  title,
  artist,
  difficulty,
  star_rating,
  background,
  isSelected,
}) {
  function StarRating({ rating }) {
    let fullStars = [];
    const wholeStars = Math.trunc(rating);
    const partStar = rating - wholeStars;
    for (let star = 0; star < wholeStars; star++) {
      fullStars.push(
        <img
          key={`${title}-${artist}-${star_rating}-${star}`}
          src={starIcon}
          style={classes.fullStar}
          alt="star rating"
        />
      );
    }

    fullStars.push(
      <img
        key={`${title}-${artist}-${star_rating}-${partStar}`}
        src={starIcon}
        style={{ width: `${Math.max(16, 24 * partStar)}px` }}
        alt="partial star rating"
      />
    );

    return fullStars;
  }

  return (
    <div
      style={{
        margin: "11px",
        marginInline: "10px",
      }}
    >
      <div style={classes.contentContainer}>
        <img src={background} style={classes.thumbnail} alt="song thumbnail" />
        <div style={{ margin: "0.5rem", height: "100%" }}>
          <div style={{ fontSize: "1.75rem" }}>{title}</div>
          <div style={{ fontSize: "1.15rem" }}>{artist}</div>
          <div style={{ fontSize: "1.25rem" }}>
            <b>{difficulty}</b>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <StarRating rating={star_rating} />
          </div>
        </div>
        {!isSelected && <div style={classes.tint} />}
      </div>
    </div>
  );
}
