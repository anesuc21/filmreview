import { Link } from "react-router-dom";
import Backup from "../assets/Image-not-found.png";
import { useState } from "react";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  const starPath =
    "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

  const [rating, setRating] = useState(() => {
    return Number(localStorage.getItem(`rating-${id}`)) || 0;
  });

  const [reviewText, setReviewText] = useState("");

  const savedReviews =
  JSON.parse(localStorage.getItem("reviews")) || [];

  const myReview = savedReviews.find((r) => r.id === id);

  const handleSaveReview = () => {
    const reviewMovie = {
      id,
      title: original_title,
      poster: image,
      review: reviewText,
      rating,
    };

    const existingReviews =
      JSON.parse(localStorage.getItem("reviews")) || [];

    const updatedReviews = existingReviews.filter(
      (r) => r.id !== id
    );

    const newReviews = [...updatedReviews, reviewMovie];

    localStorage.setItem("reviews", JSON.stringify(newReviews));

    //alert("Review updated!");

    setReviewText("");
  };


  return (
    <div className="flex justify-start flex-wrap">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">

        {/* IMAGE */}
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg" src={image} alt={original_title} />
        </Link>

        <div className="p-5">

          {/* TITLE */}
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              {original_title}
            </h5>
          </Link>

          {/* ⭐ STAR RATING */}
          <div className="flex justify-center items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => {
                  setRating(star);
                  localStorage.setItem(`rating-${id}`, star);
                }}
                className={`w-8 h-8 cursor-pointer ${
                  star <= rating ? "text-yellow-300" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d={starPath} />
              </svg>
            ))}
          </div>

          {myReview && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Review
              </label>

              <textarea
                className="w-full p-2 border rounded-lg text-sm bg-gray-100"
                value={myReview.review}
                readOnly
              />
            </div>
          )}

          {/* REVIEW INPUT */}
          <textarea
            className="w-full mt-4 p-2 border border-gray-300 rounded-lg text-sm dark: text"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          {/* SAVE BUTTON */}
          <button
            onClick={handleSaveReview}
            className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Review
          </button>

          <br />

          {/* OVERVIEW */}
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm">
            {overview}
          </p>

        </div>
      </div>
    </div>
  );
};