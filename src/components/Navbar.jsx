import logo from "../assests/asset 0.png";
import About from "./About";
import Home from "./Home";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <img src={logo} alt="#" />
        <ul className="navList">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li> <FaBars /></li>
        </ul>
        {/* <div className="icons">
          <span>
            <FaBars />
          </span>
        </div> */}
      </div>

      <Home />
      <About />
    </>
  );
};

export default Navbar;
