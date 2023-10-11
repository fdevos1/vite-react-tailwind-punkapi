import { createContext, useState, useEffect } from "react";
import { getBeers } from "../services/getBeers";
import { getRandomBeer } from "../services/getRandomBeer";

export const BeersContext = createContext({});

export const BeersProvider = ({ children }: { children: JSX.Element }) => {
  const [beersList, setBeersList] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const requestBeers = async () => {
    const fetchData = await getBeers();

    setBeersList(fetchData);
  };

  const requestRandomBeer = async () => {
    const fetchData = await getRandomBeer();

    setRandomBeer(fetchData);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    requestRandomBeer();

    setModalOpen(false);
  };

  useEffect(() => {
    requestBeers();
    requestRandomBeer();
  }, []);

  return (
    <BeersContext.Provider
      value={{
        beersList,
        randomBeer,
        modalOpen,
        handleOpenModal,
        handleCloseModal,
        requestRandomBeer,
      }}
    >
      {children}
    </BeersContext.Provider>
  );
};

export default BeersProvider;
