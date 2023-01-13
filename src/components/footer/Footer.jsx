import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="icons">
        <NavLink
          to="/category"
          className={({ isActive }) => (isActive ? "active dote" : "inactive")}
        >
          <img src="/assets/trolley.png" alt="trolley" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="/trolleys"
          className={({ isActive }) => (isActive ? "active dote" : "inactive")}
        >
          <img src="/assets/add_icon.png" alt="add" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? "active dote" : "inactive")}
        >
          <img src="/assets/map_icon.png" alt="map" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="robot"
          className={({ isActive }) => (isActive ? "active dote" : "inactive")}
        >
          <img src="/assets/robot_icon.png" alt="robot" />
          <span className="dote"></span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
