import ratingStyle from "../styles/Rating.module.scss";

export default function Rating({ rating }) {
  return (
    <div className={ratingStyle.ratingContainer}>
      <div
        className={ratingStyle.ratings}
        style={{ "--rating": `${rating ? rating * 10 : 0}%` }}
      />
    </div>
  );
}
