function SearchBar({
  search,
  setSearch,
  genre,
  setGenre,
}) {
  const genres = [
    "All",
    "Action",
    "Sci-Fi",
    "Romance",
    "Animation",
  ];

  return (
    <div className="bg-gray-900 p-5 rounded-xl">

      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search movies..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
        />

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
        >
          {genres.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default SearchBar;