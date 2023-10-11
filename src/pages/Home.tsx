import { useContext, useState } from "react";

import { BeersContext } from "../contexts/beersContext";

import BeerBox from "../components/BeerBox";
import Pagination from "../components/Pagination";

import { IBeer } from "../interfaces/beerInterface";

interface IBeerContext {
  beersList: IBeer[];
}

function Home() {
  const { beersList } = useContext(BeersContext) as IBeerContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage, setBeersPerPage] = useState(12);

  const lastIndex = currentPage * beersPerPage;
  const firstIndex = lastIndex - beersPerPage;

  const currentBeers = beersList.slice(firstIndex, lastIndex);

  setBeersPerPage(12);

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
    <div className="flex flex-col items-center p-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center p-4 gap-4">
        {currentBeers.map((beer: IBeer) => {
          return (
            <BeerBox
              key={beer.id}
              imgUrl={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              description={beer.description}
              first_brewed={beer.first_brewed}
              beer_id={beer.id}
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
    </div>
  );
}

export default Home;
