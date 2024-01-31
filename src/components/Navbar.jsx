import logo from "../assests/asset 0.png";
import Home from "./Home";

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
        </ul>
      </div>
      <div>
        <Home />
      </div>
    </>
  );
};

export default Navbar;
