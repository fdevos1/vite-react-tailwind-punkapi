import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import Icon from "./icons/icon";

function Header() {
  return (
    <header className="flex w-full justify-between items-center px-8 my-2">
      <div>
        <Icon name="Logo" />
      </div>

      <nav className="hidden md:flex gap-4">
        <a className="cursor-pointer hover:text-emerald-200" href={"/"}>
          Home
        </a>
        <a>Discover a new beer</a>
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
    </header>
  );
}

export default Header;
