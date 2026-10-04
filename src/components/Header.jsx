function Header({ favoriteCount }) {
  return (
    <header className="bg-gray-900 border-b border-gray-800">

      <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold">
            🎬 Movie Explorer
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Discover your favorite movies
          </p>
        </div>

        <div className="bg-red-600 px-4 py-2 rounded-lg">
          ❤️ {favoriteCount}
        </div>

      </div>

    </header>
  );
}

export default Header;