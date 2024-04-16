import { NavLink } from "react-router-dom";

function NavigationLinks({ onClick }) {
  return (
    <>
      <li>
        <NavLink to="/" onClick={onClick}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={onClick}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/plan" onClick={onClick}>
          Create a plan
        </NavLink>
      </li>
    </>
  );
}

export default NavigationLinks;
