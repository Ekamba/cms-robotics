import "./prepared.css";
import { GiCancel } from "react-icons/gi";
import { data } from "../data";

const Prepared = () => {
  return (
    <div className="prepared__container">
      {data.map(({ id, imageFile, type, itemCount }) => (
        <div key={id} className="prepared__list">
          <div
            className={
              type === "Electronics"
                ? "items__box items__box__electronics"
                : type === "Fresh Goods"
                ? "items__box items__box__fresh"
                : type === "Frozen"
                ? "items__box items__box__frozen"
                : type === "Fruit & Veg"
                ? "items__box items__box__fruit-veg"
                : "items__box"
            }
          >
            <div className="left__items">
              <div className="image__box">
                <img src={imageFile} alt="img" />
              </div>
              <p className="prepared__text">{type}</p>
            </div>
            <div className="right__items">
              <span className="item__count">{itemCount}</span>
              <div className="button__items">
                <GiCancel className="cancel" />
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </div>
          <div className="Electronics"></div>
          <div className="fresh__goods"></div>
          <div className="frozen"></div>
          <div className="fruits__veg"></div>
        </div>
      ))}
    </div>
  );
};

export default Prepared;
