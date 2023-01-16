import { NavLink } from "react-router-dom";
import "./footer.css";
import { FiLoader } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="icons">
        <NavLink
          to="/category"
          className={({ isActive }) =>
            isActive ? "active dote img__icon" : "inactive"
          }
        >
          <TfiShoppingCartFull className="img__icon" alt="trolley" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="/trolleys"
          className={({ isActive }) =>
            isActive ? "active dote img__icon" : "inactive"
          }
        >
          <FiLoader className="img__icon" alt="add" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="/requestedTrolley"
          className={({ isActive }) =>
            isActive ? "active dote img__icon" : "inactive"
          }
        >
          <AiOutlineFileAdd className="img__icon" alt="map" />
          <span className="dote"></span>
        </NavLink>
        <NavLink
          to="robot"
          className={({ isActive }) =>
            isActive ? "active dote img__icon" : "inactive"
          }
        >
          <FaRobot
            className="img__icon"
            src="/assets/robot_icon.png"
            alt="robot"
          />
          <span className="dote"></span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
