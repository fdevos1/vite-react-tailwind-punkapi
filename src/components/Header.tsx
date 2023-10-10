import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import Icon from "./icons/icon";

function Header() {
  return (
    <header className="flex w-full justify-between items-center px-8 my-2">
      <div className="w-1/6">
        <Icon name="Logo" />
      </div>

      <div className="flex w-2/6 sm:w-1/6 lg:w-1/12 gap-2">
        <SearchInput />
        <Dropdown />
      </div>
    </header>
  );
}

export default Header;
