import { useContext } from "react";
import { BeersContext } from "../contexts/beersContext";
import BeerBox from "../components/BeerBox";

function Home() {
  const { beersList } = useContext(BeersContext);

  return (
    <main>
      {beersList.map((beer) => {
        return (
          <BeerBox
            key={beer.id}
            imgUrl={beer.image_url}
            name={beer.name}
            description={beer.description}
            first_brewed={beer.first_brewed}
          />
        );
      })}
    </main>
  );
}

export default Home;
