import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./category.css";

const Category = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(active);
  }, [active]);

  return (
    <div className="category__container">
      <div className="inner__category">
        <div className="category__header">
          <h1 className="category__title">Categories</h1>
          <img
            src="/assets/COSMIC COBALT logo 1.png"
            alt="app/logo"
            className="logo"
          />
        </div>
        <div className="nav__menu">
          <NavLink
            to="/category/prepare"
            className={({ isActive }) =>
              isActive ? "active default__active" : "inactive"
            }
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
    </div>
  );
};

export default Category;
