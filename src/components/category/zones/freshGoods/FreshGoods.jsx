import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { addFreshGoodsToTrolley } from "../../../../features/trolleys/trolleySlice";
import { useDispatch } from "react-redux";
import "../zones.css";

const FreshGoods = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div onClick={toggleModal} className="prepare prepare__fresh">
      <img src="/assets/freshGoods.png" alt="fresh" />
      <p className="prepare__text">Fresh Goods</p>
      {isOpen && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setIsOpen(false)} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">* Prepare - Fresh Goods*</p>
            <Link
              onClick={() => dispatch(addFreshGoodsToTrolley())}
              to="/trolleys"
              className="confirm__btn"
            >
              Confirm
            </Link>
            <button onClick={toggleModal} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreshGoods;
