import { useContext } from "react";

import { BeersContext } from "../contexts/beersContext";

import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import Icon from "./icons/icon";

interface IBeerContext {
  handleOpenModal: () => void;
}

function Header() {
  const { handleOpenModal } = useContext(BeersContext) as IBeerContext;

  return (
    <>
      <div>
        <Icon name="Logo" />
      </div>

      <nav className="hidden md:flex gap-4">
        <a className="cursor-pointer hover:text-emerald-200" href={"/"}>
          Home
        </a>
        <a
          className="cursor-pointer hover:text-emerald-200"
          onClick={handleOpenModal}
        >
          Discover a new beer
        </a>
        <a
          className="cursor-pointer hover:text-emerald-200"
          href={"https://punkapi.com/documentation/v2"}
          target="_blank"
        >
          API Punk
        </a>
      </nav>

      <div className="flex  gap-2">
        <SearchInput />
        <Dropdown />
      </div>
    </>
  );
}

export default Header;
