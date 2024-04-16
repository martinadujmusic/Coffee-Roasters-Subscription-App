import { NavLink } from "react-router-dom";

import NavigationLinks from "../navigation/NavigationLinks";

import logoImg from "../../../assets/shared/desktop/logo.svg";
import facebookLogo from "../../../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../../../assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../../../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <footer className="px-6 mb-[4.5rem] md:px-10">
      <div className="max-w-7xl mx-auto bg-dark-gray-blue px-6 py-[3.375rem] flex flex-col items-center xl:px-[5.25rem] xl:py-12 xl:flex-row">
        <NavLink to="/">
          <img
            src={logoImg}
            className="h-[24px] md:h-[26px]"
            alt="Coffeeroasters logo"
          />
        </NavLink>

        <ul className="mt-12 text-center text-sm leading-sm uppercase font-bold tracking-wider text-dark-gray-blue flex flex-col gap-6 md:mt-8 md:flex-row md:gap-8 xl:mt-0 xl:ml-[6.25rem] footer-nav">
          <NavigationLinks />
        </ul>

        <div className="mt-12 flex items-center gap-6 md:mt-16 xl:mt-0 xl:ml-auto">
          <a href="#" aria-label="Facebook">
            <img src={facebookLogo} alt="Facebook logo" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterLogo} alt="Twitter logo" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramLogo} alt="Instagram logo" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
