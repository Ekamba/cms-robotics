import React, { useEffect } from "react";
import "./request.css";

const Request = () => {
  useEffect(() => {
    document.title = "Request";
  });

  return (
    <div className="request__container">
      <div className="request request__fresh">
        <img src="/assets/freshGoods.png" alt="fresh/goods" />
        <p className="prepare__text">Fresh Goods</p>
      </div>
      <div className="request request__fruits">
        <img src="/assets/fruit_veg.png" alt="fruit" />
        <p className="prepare__text">Fruit & Veg</p>
      </div>
      <div className="request request__deli">
        <img src="/assets/deli.png" alt="deli" />
        <p className="prepare__text">Deli</p>
      </div>
      <div className="request request__frozen">
        <img src="/assets/frozen.png" alt="frozen" />
        <p className="request__text">Frozen</p>
      </div>
      <div className="request request__wineSpritz">
        <img src="/assets/wine_spritz.png" alt="wineSpritz" />
        <p className="prepare__text">Wine Spritz</p>
      </div>
      <img
        src="/assets/undraw_gone_shopping_re_2lau 1.png"
        alt=""
        className="undraw"
      />
    </div>
  );
};

export default Request;
