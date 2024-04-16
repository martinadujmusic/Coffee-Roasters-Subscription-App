import { NavLink } from "react-router-dom";
import NavigationLinks from "../navigation/NavigationLinks.jsx";
import logoImg from "../../../assets/shared/desktop/logo.svg";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { fade } from "../../utils/transitions.js";

function Heading() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenuBar() {
    setIsOpen((previousState) => !previousState);
  }
  return (
    <header className="relative px-6 pt-8 pb-10 md:px-10 md:pt-10 md:pb-[3.375rem] xl:pb-11">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img
            src={logoImg}
            alt="Coffeeroasters logo"
            className="h-[18px] md:h-[26px]"
          />
        </NavLink>
        <button onClick={toggleMenuBar} className="md:hidden">
          {isOpen ? (
            <img
              src="../../assets/shared/mobile/icon-close.svg"
              alt="Close menu"
            />
          ) : (
            <img
              src="../../assets/shared/mobile/icon-hamburger.svg"
              alt="Menu"
            />
          )}
        </button>

        <ul className="hidden items-center gap-8 text-sm tracking-wider uppercase font-bold text-dark-gray-blue md:flex">
          <NavigationLinks />
        </ul>

        <Transition show={isOpen} {...fade} as={Fragment}>
          <ul className="absolute w-full min-h-dvh top-full left-0 z-10 nav-gradient text-center p-10 text-[1.5rem] leading-[1.5rem] font-serif font-black flex flex-col gap-8 md:hidden">
            <NavigationLinks onClick={() => setIsOpen(false)} />
          </ul>
        </Transition>
      </nav>
    </header>
  );
}

export default Heading;
