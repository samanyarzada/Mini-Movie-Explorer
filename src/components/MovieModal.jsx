function MovieModal({
  movie,
  onClose,
}) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-5 z-50"
      onClick={onClose}
    >

      <div
        className="bg-gray-900 max-w-lg w-full rounded-xl p-6 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold">
              {movie.title}
            </h2>

            <p className="text-gray-400 mt-1">
              {movie.year} • {movie.genre}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>

        </div>

        <div className="bg-gradient-to-br from-red-600 to-purple-700 h-48 rounded-xl flex items-center justify-center mt-6">

          <span className="text-7xl">
            🎬
          </span>

        </div>

        <div className="mt-6">

          <div className="flex justify-between mb-4">

            <span>
              Rating
            </span>

            <span className="text-yellow-400 font-bold">
              ⭐ {movie.rating}
            </span>

          </div>

          <p className="text-gray-400 leading-7">
            {movie.description}
          </p>

        </div>

        <button
          onClick={onClose}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg mt-6"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default MovieModal;