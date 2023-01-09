import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="icons">
        <NavLink
          to="/category"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <img
            src="/assets/trolley_icon.png"
            alt="trolleys"
            style={{ color: "#000" }}
          />
        </NavLink>
        <NavLink
          to="/trolleys"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <img src="/assets/add_icon.png" alt="add" style={{ color: "#000" }} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <img style={{ color: "#000" }} src="/assets/map_icon.png" alt="map" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <img
            src="/assets/robot_icon.png"
            alt="robot"
            style={{ color: "#000" }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
