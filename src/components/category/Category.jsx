import { NavLink, Outlet } from "react-router-dom";
import "./category.css";

const Category = () => {
  return (
    <div className="category__container">
      <div className="inner__category">
        <div className="category__header">
          <p className="category__title">Categories</p>
          <img
            src="/assets/COSMIC COBALT logo 1.png"
            alt="app/logo"
            className="logo"
          />
        </div>
        <div className="nav__menu">
          <NavLink
            to="/category/prepare"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Prepare
          </NavLink>
          <NavLink
            to="/category/request"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Request
          </NavLink>
        </div>
      </div>
      <Outlet />
      <div className="footer">footer</div>
    </div>
  );
};

export default Category;
