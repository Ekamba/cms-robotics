import "./prepared.css";
import { GiCancel } from "react-icons/gi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Prepared = () => {
  const trolleyQty = useSelector((state) => state.trolley);

  useEffect(() => {
    document.title = "Prepared";
  });

  return (
    <div className="prepared__container">
      <div className="prepared__list">
        <div className="prepared__item__box prepared__item__box__fresh">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/freshGoods.png" alt="img" />
            </div>
            <p className="prepared__text">Fresh Goods</p>
          </div>
          <div className="right__items">
            <span className="item__count">{trolleyQty.freshGoodQty}</span>

            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="prepared__item__box prepared__item__box__fruit-veg">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/fruit_Veg.png" alt="img" />
            </div>
            <p className="prepared__text">Fruits & Veg</p>
          </div>
          <div className="right__items">
            <span className="item__count">{trolleyQty.fruitsVegQty}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="prepared__item__box">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/deli.png" alt="img" />
            </div>
            <p className="prepared__text">Deli</p>
          </div>
          <div className="right__items">
            <span className="item__count">{trolleyQty.deliQty}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="prepared__item__box prepared__item__box__frozen">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/frozens.png" alt="img" />
            </div>
            <p className="prepared__text">Frozen</p>
          </div>
          <div className="right__items">
            <span className="item__count">{trolleyQty.frozenQty}</span>

            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="prepared__item__box prepared__item__box__wineSpritz">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/wine_spritz.png" alt="img" />
            </div>
            <p className="prepared__text">Wine Spritz</p>
          </div>
          <div className="right__items">
            <span className="item__count">{trolleyQty.wineSpritzQty}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prepared;
