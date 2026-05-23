import { Link } from "react-router-dom";
import { useState } from "react";

export const MyReviews = () => {

  // get reviews from localStorage
const [reviews, setReviews] = useState(() => {
  return JSON.parse(localStorage.getItem("reviews")) || [];
});

const handleDelete = (id) => {
  const existingReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  const updatedReviews = existingReviews.filter(
    (review) => review.id !== id
  );

  localStorage.setItem("reviews", JSON.stringify(updatedReviews));

  // force UI update
  setReviews(updatedReviews);
};


  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        My Reviews
      </h1>

      {reviews.length === 0 ? (
        <div className="text-gray-500 text-lg">
          You have not reviewed any movies yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {reviews.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
                <div key={movie.id} className="bg-white p-4 rounded-xl shadow">

                    <img src={movie.poster} className="rounded-lg" alt="poster" />

                    <h2 className="text-xl font-bold mt-2">{movie.title}</h2>

                    <p className="text-sm text-gray-600">{movie.review}</p>

                    <p className="text-yellow-500 font-bold">
                    ⭐ {movie.rating}/5
                    </p>

                    <button
                    onClick={() => handleDelete(movie.id)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg"
                    >
                    Delete
                    </button>

                </div>
            </Link>

        ))}

        </div>
        
      )}

    </section>
  );
};