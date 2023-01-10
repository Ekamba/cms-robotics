import "./requested.css";
import { GiCancel } from "react-icons/gi";
import { data } from "../data";

const requested = () => {
  return (
    <div className="requested__container">
      {data.map(({ id, imageFile, type, itemCount }) => (
        <div key={id} className="requested__list">
          <div
            className={
              type === "Electronics"
                ? "requested__item__box requested__item__box__electronics"
                : type === "Fresh Goods"
                ? "requested__item__box requested__item__box__fresh"
                : type === "Frozen"
                ? "requested__item__box requested__item__box__frozen"
                : type === "Fruit & Veg"
                ? "requested__item__box requested__item__box__fruit-veg"
                : "requested__item__box"
            }
          >
            <div className="left__items">
              <div className="image__box">
                <img src={imageFile} alt="img" />
              </div>
              <p className="requested__text">{type}</p>
            </div>
            <div className="right__items">
              <span className="item__count">{itemCount}</span>
              <div className="button__items">
                <GiCancel className="cancel" />
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default requested;
