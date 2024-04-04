import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/plan">Create a plan</NavLink>
      </li>
    </ul>
  );
}

export default NavigationBar;
