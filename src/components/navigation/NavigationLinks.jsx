import { NavLink } from "react-router-dom";

function NavigationLinks({ onClick }) {
  return (
    <>
      <li>
        <NavLink to="/" onClick={onClick} className="hover:opacity-85">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={onClick} className="hover:opacity-85">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/plan" onClick={onClick} className="hover:opacity-85">
          Create a plan
        </NavLink>
      </li>
    </>
  );
}

export default NavigationLinks;
