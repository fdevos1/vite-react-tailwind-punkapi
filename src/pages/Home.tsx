import { useContext, useState } from "react";
import { BeersContext } from "../contexts/beersContext";
import BeerBox from "../components/BeerBox";
import Pagination from "../components/Pagination";

function Home() {
  const { beersList } = useContext(BeersContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage, setBeersPerPage] = useState(12);

  const lastIndex = currentPage * beersPerPage;
  const firstIndex = lastIndex - beersPerPage;

  const currentBeers = beersList.slice(firstIndex, lastIndex);

  const handlePrevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex flex-col items-center p-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center p-4 gap-4">
        {currentBeers.map((beer) => {
          return (
            <BeerBox
              key={beer.id}
              imgUrl={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              description={beer.description}
              first_brewed={beer.first_brewed}
            />
          );
        })}
      </div>

      <Pagination
        totalBeers={beersList.length}
        beersPerPage={beersPerPage}
        prevPage={handlePrevPage}
        selectPage={handleChangePage}
        nextPage={handleNextPage}
        currentPage={currentPage}
      />
    </main>
  );
}

export default Home;
