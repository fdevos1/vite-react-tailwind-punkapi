function SearchInput() {
  return (
    <div className="hidden relative text-white focus-within:text-white">
      <span className="absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          fill="none"
          stroke={"rgb(64 64 64)"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        className="py-2 text-sm text-neutral-700 bg-neutral-300 rounded-md pl-5 pr-10 focus:outline-none focus:text-neutral-800"
        placeholder="Procurar"
      />
    </div>
  );
}

export default SearchInput;
