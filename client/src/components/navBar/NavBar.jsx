import { Link } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          FreeL
          {/* </Link> */}
        </div>
        <div className="links">
          <span>Find Client</span>
          <span>Find Freelancer</span>
          <span>Explore</span>
          <span>Our Uniqueness</span>
          <button>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
