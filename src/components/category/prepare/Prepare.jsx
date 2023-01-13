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
import { Link, NavLink } from "react-router-dom";
import types from "@testing-library/user-event";

const Prepare = () => {
  const [show, setShow] = useState(false);
  const [types, setTypes] = useState({
    data: [
      {
        value: "Fresh Goods",
      },
      {
        value: "Fruit & Veg",
      },
      {
        value: "Deli",
      },
      {
        value: "Frozen",
      },

      {
        value: "Wine Spritz",
      },
    ],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Prepare";
  });

  return (
    <div className="prepare__container">
      <div onClick={() => setShow(true)} className="prepare prepare__fresh">
        <img src="/assets/freshGoods.png" alt="fresh" />
        <p className="prepare__text">Fresh Goods</p>
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__fruits">
        <img src="/assets/fruit_veg.png" alt="dry/good" />
        <p className="prepare__text">Fruit & Veg</p>
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__deli">
        <img src="/assets/deli.png" alt="dry/good" />
        <p className="prepare__text">Deli</p>
      </div>
      <div onClick={() => setShow(true)} className="prepare prepare__frozen">
        <img src="/assets/frozen.png" alt="dry/good" />
        <p className="prepare__frozen">Frozen</p>
      </div>
      <div
        onClick={() => setShow(true)}
        className="prepare prepare__WindSpritz"
      >
        <img src="/assets/wine_spritz.png" alt="electronic" />
        <p className="prepare__text">Wine Spritz</p>
      </div>
      <div className="prepare prepare__undraw">
        <img
          className="undraw"
          src="/assets/undraw_gone_shopping_re_2lau 1.png"
          alt="undraw"
        />
      </div>
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShow(false)} />
            <p className="selected__text">You have selected</p>
            {types.data.map((type, i) =>
              i === type.value ? (
                <p key={i} className="item__name">
                  * Prepare - {type.value} *
                </p>
              ) : (
                ""
              )
            )}
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

// {
//   data.purpose?.map((item, index) =>
//     index === 0 ? (
//       <li key={index} onClick={() => handleSelect(item)}>
//         {item?.value}
//       </li>
//     ) : (
//       <li key={index}>{item?.value}</li>
//     )
//   );
// }
