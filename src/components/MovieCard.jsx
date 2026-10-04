function MovieCard({
  movie,
  isFavorite,
  onFavorite,
  onDetails,
}) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition">

      {/* Poster */}
      <div className="h-56 bg-gradient-to-br from-red-600 to-purple-700 flex items-center justify-center">

        <span className="text-6xl">
          🎬
        </span>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex justify-between items-start gap-3">

          <div>
            <h2 className="text-xl font-bold">
              {movie.title}
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              {movie.year} • {movie.genre}
            </p>
          </div>

          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
            ⭐ {movie.rating}
          </span>

        </div>

        <p className="text-gray-400 mt-4 text-sm line-clamp-2">
          {movie.description}
        </p>

        <div className="flex gap-3 mt-5">

          <button
            onClick={() => onDetails(movie)}
            className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg"
          >
            Details
          </button>

          <button
            onClick={() =>
              onFavorite(movie.id)
            }
            className={`px-4 py-2 rounded-lg ${
              isFavorite
                ? "bg-red-600"
                : "bg-gray-800"
            }`}
          >
            {isFavorite ? "❤️" : "♡"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;