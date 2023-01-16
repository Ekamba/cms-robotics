import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDeliFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingDeli = () => {
  const trolleyQty = useSelector((state) => state.trolley);
  const dispatch = useDispatch();
  return (
    <div className="prepared__item__box prepared__item__box__deli">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/deli.png" alt="img" />
        </div>
        <p className="prepared__text">Deli</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQty.deliQty}</span>
        <div className="trolley__actions">
          <p>Request Trolley</p>
        </div>
        <div className="trolley__actions">
          <p onClick={() => dispatch(removeDeliFromTrolley())}>
            Back to storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingDeli;
