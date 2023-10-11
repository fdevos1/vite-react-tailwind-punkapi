import { useContext } from "react";

import { IBeer } from "../../interfaces/beerInterface";
import { BeersContext } from "../../contexts/beersContext";

interface IBeerContext {
  randomBeer: IBeer[];
}

function BeerInfoSkeleton() {
  const { randomBeer } = useContext(BeersContext) as IBeerContext;

  const lines = randomBeer.map((beer) =>
    Object.keys(beer).map((i) => {
      return <div key={i} className="w-3/4 h-4 bg-gray-400 mt-4" />;
    })
  );

  return (
    <div className="flex flex-col h-full w-full border items-center p-8 animate-pulse ">
      <div className="w-full">
        <div className="flex justify-center">
          <div className="w-[200px] h-[300px] lg:h-[200px] bg-gray-400" />
        </div>

        {lines}
      </div>
    </div>
  );
}

export default BeerInfoSkeleton;
