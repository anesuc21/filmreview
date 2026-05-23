import { Card } from "../componenets";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="transition-transform duration-150 delay-500 hover:scale-[1.05]"
            >
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};