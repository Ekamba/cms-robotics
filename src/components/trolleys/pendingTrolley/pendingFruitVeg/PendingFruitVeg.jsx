import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFruitVegFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingFruitVeg = () => {
  const trolleyQtys = useSelector((state) => state.trolley);
  const dispatch = useDispatch();
  return (
    <div className="prepared__item__box prepared__item__box__fruit-veg">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/fruit_Veg.png" alt="img" />
        </div>
        <p className="prepared__text">Fruits & Veg</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQtys.fruitsVegQty}</span>
        <div className="trolley__actions">
          <p>Request Trolley</p>
        </div>
        <div className="trolley__actions">
          <p onClick={() => dispatch(removeFruitVegFromTrolley())}>
            Back to storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingFruitVeg;
