import { NavLink, Outlet } from "react-router-dom";
import "./trolleys.css";

const Trolleys = () => {
  return (
    <div className="trolley__container">
      <div className="trolley__header">
        <h1 className="trolley__title">Trolleys</h1>
        <img
          src="/assets/COSMIC COBALT logo 1.png"
          alt="app/logo"
          className="logo"
        />
      </div>
      <div className="menu__container">
        <div className="trolleys__menu">
          <NavLink
            to="/trolleys/prepared"
            className={({ isActive }) =>
              isActive ? "active default__active" : "inactive"
            }
          >
            Prepared
          </NavLink>
          <NavLink
            to="/trolleys/requested"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Requested
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Trolleys;
