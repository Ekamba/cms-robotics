import "./requested.css";
import { GiCancel } from "react-icons/gi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Requested = () => {
  const { pending, inProgress, completed, cancelled } = useSelector(
    (state) => state.trolley.statue
  );

  console.log(pending);

  useEffect(() => {
    document.title = "requested";
  });

  return (
    <div className="requested__container">
      <div className="requested__list">
        <div className="requested__item__box requested__item__box__pending">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/deli.png" alt="dry/good" />
            </div>
            <p className="prepare__text">Deli</p>
          </div>
          <div className="right__items">
            <span className="item__pending">{pending}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="requested__item__box requested__item__box__inProgress">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/fruit_Veg.png" alt="img" />
            </div>
            <p className="requested__text">Fruits & Veg</p>
          </div>
          <div className="right__items">
            <span className="item__inProgress">{inProgress}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="requested__item__box">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/deli.png" alt="img" />
            </div>
            <p className="requested__text">Deli</p>
          </div>
          <div className="right__items">
            <span className="item__completed">{completed}</span>
            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="requested__item__box requested__item__box__cancelled">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/frozens.png" alt="img" />
            </div>
            <p className="requested__text">Frozen</p>
          </div>
          <div className="right__items">
            <span className="item__count">{cancelled}</span>

            <div className="button__items">
              <GiCancel className="cancel" />
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="requested__item__box requested__item__box__wineSpritz">
          <div className="left__items">
            <div className="image__box">
              <img src="/assets/wine_spritz.png" alt="img" />
            </div>
            <p className="requested__text">Wine Spritz</p>
          </div>
          <div className="right__items">
            <span className="item__pending">{pending}</span>
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

export default Requested;
