import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFrozenFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingFrozen = () => {
  const trolleyQty = useSelector((state) => state.trolley);
  const dispatch = useDispatch();
  return (
    <div className="prepared__item__box prepared__item__box__frozen">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/frozen.png" alt="img" />
        </div>
        <p className="prepared__text">Fruits & Veg</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQty.frozenQty}</span>
        <div className="trolley__actions">
          <p>Request Trolley</p>
        </div>
        <div className="trolley__actions">
          <p onClick={() => dispatch(removeFrozenFromTrolley())}>
            Back to storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingFrozen;
