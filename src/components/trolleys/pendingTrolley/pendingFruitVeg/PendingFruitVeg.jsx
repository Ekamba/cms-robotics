import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFruitVegFromTrolley } from "../../../../features/trolleys/trolleySlice";

const PendingFruitVeg = () => {
  const [request, setRequest] = useState(false);
  const [back, setBack] = useState(false);
  const trolleyQty = useSelector((state) => state.trolley);
  const dispatch = useDispatch();

  const toggleModalRequest = () => {
    setRequest((prevState) => !prevState);
  };

  const toggleModalBack = () => {
    setBack((prevState) => !prevState);
  };
  return (
    <div className="prepared__item__box prepared__item__box__fruit-veg">
      <div className="right__items">
        <div className="image__box">
          <img src="/assets/fruit_veg.png" alt="img" />
        </div>
        <p className="prepared__text">Fruits & Veg</p>
      </div>
      <div className="left__items">
        <span className="item__count">{trolleyQty.fruitsVegQty}</span>
        <div className="trolley__actions">
          <p onClick={toggleModalRequest}>Request Trolley</p>
          {request && (
            <div className="modal">
              <div className="inner__modal">
                <RxCross2 onClick={toggleModalRequest} />
                <p className="selected__text">You have selected:</p>
                <p className="item__name">"Fruits & Veg- Request Trolley"</p>
                <button
                  onClick={() => {}}
                  to="/trolleys"
                  className="confirm__btn"
                >
                  Confirm
                </button>
                <button onClick={toggleModalRequest} className="cancel__btn">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="trolley__actions">
          <p onClick={toggleModalBack}>Back to storage</p>
          {back && (
            <div className="modal">
              <div className="inner__modal">
                <RxCross2 onClick={toggleModalBack} />
                <p className="selected__text">You have selected:</p>
                <p className="item__name">"Fruits & Veg - back to storage"</p>
                <button
                  onClick={() => {
                    dispatch(removeFruitVegFromTrolley());
                    toggleModalBack();
                  }}
                  to="/trolleys"
                  className="confirm__btn"
                >
                  Confirm
                </button>
                <button onClick={toggleModalBack} className="cancel__btn">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingFruitVeg;
