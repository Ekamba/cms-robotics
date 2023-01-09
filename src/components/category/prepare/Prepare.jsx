import React, { useState } from "react";
import "./prepare.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Prepare = () => {
  const [show, setShow] = useState(false);

  const toggleModalActive = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="prepare__container">
      <div onClick={toggleModalActive} className="prepare prepare__dry">
        <img src="/assets/category1.png" alt="dry/good" />
        <p className="prepare__text">Dry Goods</p>
      </div>
      <div className="prepare prepare__electronics">
        <img src="/assets/category2.png" alt="electronic" />
        <p className="prepare__text">Electronics</p>
      </div>
      <div className="prepare prepare__fresh">
        <img src="/assets/category3.png" alt="fresh" />
        <p className="prepare__text">Fresh Goods</p>
      </div>
      <div className="prepare prepare__frozen">
        <img src="/assets/frozen.png" alt="frozen" />
        <p className="prepare__text">Frozen</p>
      </div>
      <div className="prepare prepare__fruits">
        <img src="/assets/category5.png" alt="fruit" />
        <p className="prepare__text">Fruits & Veg</p>
      </div>
      <img
        src="/assets/undraw_gone_shopping_re_2lau 1.png"
        alt=""
        className="undraw"
      />
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={toggleModalActive} />
            <p className="selected__text">You have selected</p>
            <p className="item__name">*Prepare - Frozen*</p>
            <Link to="/trolleys" className="confirm__btn">
              Confirm
            </Link>
            <button onClick={toggleModalActive} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prepare;
