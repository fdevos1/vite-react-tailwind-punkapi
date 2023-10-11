import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useOutsideClick } from "../hooks/detectOutsideClick";
import { BeersContext } from "../contexts/beersContext";

interface IBeerContext {
  handleSettingsOpenModal: () => void;
}

function Dropdown() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { signOut } = useContext(AuthContext) as { signOut: () => void };
  const { handleSettingsOpenModal } = useContext(BeersContext) as IBeerContext;

  const handleCloseDropDown = () => {
    setToggleDropDown(false);
  };

  const ref = useOutsideClick(handleCloseDropDown);

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setToggleDropDown(!toggleDropDown)}
        >
          Options
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        ref={ref}
        className={`${
          toggleDropDown === false ? "hidden" : "block"
        }  fixed right-8 2xl:right-6 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div className="py-1">
          <button
            onClick={() => {
              setToggleDropDown(false);
              handleSettingsOpenModal();
            }}
            className="text-gray-700 block px-4 py-2 text-sm w-full text-start hover:text-emerald-200 hover:font-bold transition-all"
          >
            Account settings
          </button>

          <button
            className="text-gray-700 block px-4 py-2 text-sm w-full text-start hover:text-emerald-200 hover:font-bold transition-all"
            onClick={() => {
              setToggleDropDown(false);
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
