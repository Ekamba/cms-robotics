import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFreshFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingFreshGoods = () => {
  const trolleyQty = useSelector((state) => state.trolley);
  const dispatch = useDispatch();
  return (
    <div className="prepared__item__box prepared__item__box__fresh">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/freshGoods.png" alt="img" />
        </div>
        <p className="prepared__text">Fresh Goods</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQty.freshGoodQty}</span>
        <div className="trolley__actions">
          <p>Request Trolley</p>
        </div>
        <div className="trolley__actions">
          <p onClick={() => dispatch(removeFreshFromTrolley())}>
            Back to storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingFreshGoods;
