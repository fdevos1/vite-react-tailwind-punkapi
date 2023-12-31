function Pagination({
  totalBeers,
  beersPerPage,
  prevPage,
  selectPage,
  nextPage,
  currentPage,
  handleBeersPerPage,
}: {
  totalBeers: number;
  beersPerPage: number;
  prevPage: () => void;
  selectPage: (page: number) => void;
  nextPage: () => void;
  currentPage: number;
  handleBeersPerPage: (newState: number) => void;
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav className="flex gap-2">
      <button onClick={() => prevPage()} className="hover:text-emerald-200">
        Anterior
      </button>

      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => selectPage(page)}
            className={
              currentPage === page ? "text-emerald-300" : "text-neutral-800"
            }
          >
            {page}
          </button>
        );
      })}

      <button className="hover:text-emerald-200" onClick={() => nextPage()}>
        Próximo
      </button>

      <button
        className="hidden"
        onClick={() => handleBeersPerPage(12)}
      ></button>
    </nav>
  );
}

export default Pagination;
