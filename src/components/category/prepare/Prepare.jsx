import React, { useEffect, useState } from "react";
import "./prepare.css";
import { RxCross2 } from "react-icons/rx";
import {
  addDeliToTrolley,
  addFreshGoodsToTrolley,
  addFrozenToTrolley,
  addFruitsVegToTrolley,
  addWineSpritzToTrolley,
} from "../../../features/trolleys/trolleySlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Prepare = () => {
  const [show, setShow] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Prepare";
  }, []);

  return (
    <div className="prepare__container">
      <div onClick={() => setShow(true)} className="prepare prepare__fresh">
        <img src="/assets/freshGoods.png" alt="fresh" />
        <p className="prepare__text">Fresh Goods</p>
        {/* {show && (
          <div className="modal">
            <div className="inner__modal">
              <RxCross2 onClick={() => setShow(false)} />
              <p className="selected__text">You have selected</p>
              <p className="item__name">*Prepare - Fresh Goods*</p>
              <Link
                onClick={() => dispatch(addFreshGoodsToTrolley())}
                to="/trolleys"
                className="confirm__btn"
              >
                Confirm
              </Link>
              <button onClick={() => setShow(false)} className="cancel__btn">
                Cancel
              </button>
            </div>
          </div>
        )} */}
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__fruits">
        <img src="/assets/fruit_veg.png" alt="dry/good" />
        <p className="prepare__text">Fruit & Veg</p>
        {/* {show && (
          <div className="modal">
            <div className="inner__modal">
              <RxCross2 onClick={() => setShow(false)} />
              <p className="selected__text">You have selected</p>
              <p className="item__name">*Prepare - Fruit & Veg*</p>
              <Link
                onClick={() => dispatch(addFruitsVegToTrolley())}
                to="/trolleys"
                className="confirm__btn"
              >
                Confirm
              </Link>
              <button onClick={() => setShow(false)} className="cancel__btn">
                Cancel
              </button>
            </div>
          </div>
        )} */}
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__deli">
        <img src="/assets/deli.png" alt="dry/good" />
        <p className="prepare__text">Deli</p>
        {/* {show && (
          <div className="modal">
            <div className="inner__modal">
              <RxCross2 onClick={() => setShow(false)} />
              <p className="selected__text">You have selected</p>
              <p className="item__name">*Prepare - Deli*</p>
              <Link
                onClick={() => dispatch(addDeliToTrolley())}
                to="/trolleys"
                className="confirm__btn"
              >
                Confirm
              </Link>
              <button onClick={() => setShow(false)} className="cancel__btn">
                Cancel
              </button>
            </div>
          </div>
        )} */}
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__frozen">
        <img src="/assets/frozen.png" alt="dry/good" />
        {/* <p className="prepare__text">Frozen</p>
        {show && (
          <div className="modal">
            <div className="inner__modal">
              <RxCross2 onClick={() => setShow(false)} />
              <p className="selected__text">You have selected</p>
              <p className="item__name">*Prepare - Frozen*</p>
              <Link
                onClick={() => dispatch(addFrozenToTrolley())}
                to="/trolleys"
                className="confirm__btn"
              >
                Confirm
              </Link>
              <button onClick={() => setShow(false)} className="cancel__btn">
                Cancel
              </button>
            </div>
          </div>
        )} */}
      </div>
      <div
        onClick={() => setShow(true)}
        className="prepare prepare__WindSpritz"
      >
        <img src="/assets/wine_spritz.png" alt="electronic" />
        <p className="prepare__text">Wine Spritz</p>
      </div>
      <img
        className="undraw"
        src="/assets/undraw_gone_shopping_re_2lau 1.png"
        alt=""
      />
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShow(false)} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">*Prepare - Wine Spritz*</p>
            <Link
              onClick={() => dispatch(addWineSpritzToTrolley())}
              to="/trolleys"
              className="confirm__btn"
            >
              Confirm
            </Link>
            <button onClick={() => setShow(false)} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prepare;
