import "./requested.css";
import { data } from "../data";
import { GiCancel } from "react-icons/gi";

const Requested = () => {
  return (
    <div className="requested__container">
      {data.map(({ id, imageFile, type, itemCount }) => (
        <div key={id} className="requested__list">
          <div className="items__box">
            <div className="left__items">
              <div className="image__box">
                <img src={imageFile} alt="img" />
              </div>
              <p className="requested__text">{type}</p>
            </div>
            <div className="right__items">
              <span className="item__count">{itemCount}</span>
              <div className="button__items">
                <GiCancel fontSize={50} className="cancel" />
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

export default Requested;
