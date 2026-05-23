import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Backup from "../assets/Image-not-found.png";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
    }

    async function fetchProviders() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const json = await response.json();

      // 🇦🇺 use Australia region
      setProviders(json.results?.AU);
    }

    fetchMovie();
    fetchProviders();
  }, [params.id]);

  if (!movie) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  // get saved review + rating
  const savedReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  const userReview = savedReviews.find((r) => r.id === movie.id);

  return (
    <main>
      <section className= "flex flex-col lg:flex-row justify-center gap-10 py-10 px-4">

        {/* IMAGE */}
        <div className="max-w-sm">
          <img className="rounded-xl shadow-lg" src={image} alt={movie.title} />
        </div>

        {/* DETAILS */}
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">

          <h1 className="text-4xl font-bold my-3">
            {movie.title}
          </h1>

          <p className="my-4 text-gray-600 dark:text-gray-300">
            {movie.overview}
          </p>

          {/* GENRES */}
          {movie.genres && (
            <div className="my-5 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* RUNTIME */}
          <p className="my-2">
            <span className="font-semibold mr-2">Runtime:</span>
            <span>{movie.runtime} min</span>
          </p>

          {/* RELEASE DATE */}
          <p className="my-2">
            <span className="font-semibold mr-2">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          {/* WATCH PROVIDERS */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">
              Where to Watch
            </h2>

            {providers?.flatrate ? (
              <div className="flex flex-wrap gap-2">
                {providers.flatrate.map((p) => (
                  <span
                    key={p.provider_id}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    {p.provider_name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Not available on streaming in your region.
              </p>
            )}
          </div>

          {/* ⭐ USER REVIEW SECTION */}
          {userReview ? (
            <div className="mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-2">
                Your Review
              </h2>

              <p className="text-yellow-500 font-bold">
                ⭐ {userReview.rating}/5
              </p>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {userReview.review}
              </p>
            </div>
          ) : (
            <p className="mt-6 text-gray-500">
              You have not reviewed this movie yet.
            </p>
          )}

        </div>
      </section>
    </main>
  );
};