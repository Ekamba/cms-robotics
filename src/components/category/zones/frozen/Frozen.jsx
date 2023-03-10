import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { addFrozenToTrolley } from "../../../../features/trolleys/trolleySlice";
import { useDispatch } from "react-redux";

const Frozen = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div onClick={toggleModal} className="prepare prepare__frozen">
      <img src="/assets/frozen.png" alt="fruit" />
      <p className="frozen__text">Frozen</p>
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={toggleModal} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">* Prepare - Frozen*</p>
            <Link
              onClick={() => dispatch(addFrozenToTrolley())}
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

export default Frozen;
