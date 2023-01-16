import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWineSpritzFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingWineSpritz = () => {
  const trolleyQty = useSelector((state) => state.trolley);
  const dispatch = useDispatch();
  return (
    <div className="prepared__item__box prepared__item__box__wineSpritz">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/wine_spritz.png" alt="img" />
        </div>
        <p className="prepared__text">Wine Spritz</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQty.wineSpritzQty}</span>
        <div className="trolley__actions">
          <p>Request Trolley</p>
        </div>
        <div className="trolley__actions">
          <p onClick={() => dispatch(removeWineSpritzFromTrolley())}>
            Back to storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingWineSpritz;
