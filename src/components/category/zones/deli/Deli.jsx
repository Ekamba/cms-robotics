import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { addDeliToTrolley } from "../../../../features/trolleys/trolleySlice";
import { useDispatch } from "react-redux";

const Deli = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div onClick={() => setShow(true)} className="prepare prepare__deli">
      <img src="/assets/fruit_veg.png" alt="fruit" />
      <p className="prepare__text">Deli</p>
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShow(false)} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">* Prepare - Deli*</p>
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
      )}
    </div>
  );
};

export default Deli;
