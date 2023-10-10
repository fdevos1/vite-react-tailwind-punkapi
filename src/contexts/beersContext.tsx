import { createContext, useState, useEffect } from "react";
import { getBeers } from "../services/getBeers";

export const BeersContext = createContext({});

export const BeersProvider = ({ children }: { children: JSX.Element }) => {
  const [beersList, setBeersList] = useState([]);

  const requestBeers = async () => {
    const fetchData = await getBeers();

    setBeersList(fetchData);
  };

  useEffect(() => {
    requestBeers();
  }, []);

  return (
    <BeersContext.Provider value={{ beersList }}>
      {children}
    </BeersContext.Provider>
  );
};

export default BeersProvider;
