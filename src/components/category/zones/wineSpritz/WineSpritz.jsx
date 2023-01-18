import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { addWineSpritzToTrolley } from "../../../../features/trolleys/trolleySlice";
import { useDispatch } from "react-redux";

const WineSpritz = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div onClick={toggleModal} className="prepare prepare__WindSpritz">
      <img src="/assets/wine_spritz.png" alt="wineSpritz" />
      <p className="prepare__text">Wine Spritz</p>
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShow(false)} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">* Prepare - Wine Spritz*</p>
            <Link
              onClick={() => dispatch(addWineSpritzToTrolley())}
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

export default WineSpritz;
