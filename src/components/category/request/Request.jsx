import React, { useState } from "react";
import "./request.css";
import { RxCross2 } from "react-icons/rx";

const Request = () => {
  const [show, setShow] = useState(false);

  const toggleModalActive = () => {
    setShow((prevState) => !prevState);
  };
  const toggleModalInactive = () => {};
  return (
    <div className="request__container">
      <div onClick={toggleModalActive} className="request request__dry">
        <img src="/assets/category1.png" alt="dry/good" />
        <p className="request__text">Dry Goods</p>
      </div>
      <div className="request request__electronics">
        <img src="/assets/category2.png" alt="electronic" />
        <p className="request__text">Electronics</p>
      </div>
      <div className="request request__fresh">
        <img src="/assets/category3.png" alt="fresh" />
        <p className="request__text">Fresh Goods</p>
      </div>
      <div className="request request__frozen">
        <img src="/assets/category4.png" alt="frozen" />
        <p className="request__text">Frozen</p>
      </div>
      <div className="request request__fruits">
        <img src="/assets/category5.png" alt="fruit" />
        <p className="request__text">Fruits & Veg</p>
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
            <p className="item__name">*request - Frozen*</p>
            <button className="confirm__btn">Confirm</button>
            <button onClick={toggleModalActive} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
