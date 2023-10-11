import { useContext } from "react";

import Modal from "./Modal";
import BeerBox from "./BeerBox";

import { BeersContext } from "../contexts/beersContext";
import { IBeer } from "../interfaces/beerInterface";

interface IBeerContext {
  beersList: IBeer[];
  randomBeer: IBeer[];
  modalOpen: boolean;
  handleCloseModal: () => void;
}

function DiscoverNewBeer() {
  const { randomBeer, modalOpen, handleCloseModal } = useContext(
    BeersContext
  ) as IBeerContext;

  return (
    <Modal open={modalOpen} onClose={handleCloseModal}>
      {randomBeer?.map((beer) => (
        <BeerBox
          key={beer.id}
          imgUrl={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          description={beer.description}
          first_brewed={beer.first_brewed}
          beer_id={beer.id}
        />
      ))}
    </Modal>
  );
}

export default DiscoverNewBeer;
