import { useState } from "react";

import { movies } from "./data/movies";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

function App() {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All");

  const [favorites, setFavorites] = useState([]);

  const [selectedMovie, setSelectedMovie] =
    useState(null);

  // Add / Remove Favorite
  function toggleFavorite(id) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(
          (movieId) => movieId !== id
        );
      }

      return [...prevFavorites, id];
    });
  }

  // Search + Filter
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" ||
      movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Header
        favoriteCount={favorites.length}
      />

      <main className="max-w-6xl mx-auto px-5 py-10">

        <SearchBar
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
        />

        {filteredMovies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No movies found.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(
                  movie.id
                )}
                onFavorite={toggleFavorite}
                onDetails={setSelectedMovie}
              />
            ))}

          </div>
        )}

      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

    </div>
  );
}

export default App;