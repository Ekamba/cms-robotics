import React from "react";
import "./prepared.css";
import { GiCancel } from "react-icons/gi";

const Prepared = () => {
  return (
    <div className="prepared__container">
      <div className="prepared__list">
        <div className="dry__goods">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/category1.png" alt="dry-goods" />
            </div>
            <p className="prepared__text">Dry Goods</p>
          </div>
          <div className="right__items">
            <span className="item__count">3</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="Electronics"></div>
        <div className="fresh__goods"></div>
        <div className="frozen"></div>
        <div className="fruits__veg"></div>
      </div>
    </div>
  );
};

export default Prepared;
