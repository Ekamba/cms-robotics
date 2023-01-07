import React from "react";
import "./prepare.css";

const Prepare = () => {
  return (
    <div className="prepare__container">
      <div className="prepare prepare__dry">
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
        <img src="/assets/category4.png" alt="frozen" />
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
    </div>
  );
};

export default Prepare;
