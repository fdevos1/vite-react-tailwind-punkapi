import { createContext, useState, useEffect } from "react";
import { getBeers } from "../services/getBeers";
import { getRandomBeer } from "../services/getRandomBeer";

export const BeersContext = createContext({});

export const BeersProvider = ({ children }: { children: JSX.Element }) => {
  const [beersList, setBeersList] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);
  const [beerModalOpen, setBeerModalOpen] = useState(false);
  const [accountSettingsModalOpen, setAccountSettingsModalOpen] =
    useState(false);

  const requestBeers = async () => {
    const fetchData = await getBeers();

    setBeersList(fetchData);
  };

  const requestRandomBeer = async () => {
    const fetchData = await getRandomBeer();

    setRandomBeer(fetchData);
  };

  const handleOpenModal = () => {
    setBeerModalOpen(true);
  };

  const handleCloseModal = () => {
    requestRandomBeer();

    setBeerModalOpen(false);
  };

  const handleSettingsOpenModal = () => {
    setAccountSettingsModalOpen(true);
  };

  const handleSettingsCloseModal = () => {
    setAccountSettingsModalOpen(false);
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
        beerModalOpen,
        handleOpenModal,
        handleCloseModal,
        handleSettingsOpenModal,
        handleSettingsCloseModal,
        accountSettingsModalOpen,
        requestRandomBeer,
      }}
    >
      {children}
    </BeersContext.Provider>
  );
};

export default BeersProvider;
