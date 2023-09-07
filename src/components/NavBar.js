import { NavLink } from "react-router-dom";
// import header from "../assets/header.png";

function NavBar() {
  return (
    <nav className="Navbar">
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
