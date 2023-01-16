import "./requested.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Requested = () => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState(false);

  useEffect(() => {
    document.title = "Requested Trolley";
  });

  const toggleStyle = () => {
    setStyle(true);
  };

  return (
    <div className="requested__container">
      <div className="requested__header">
        <img
          src="/assets/COSMIC COBALT logo 1.png"
          alt="app/logo"
          className="logo"
        />
        <h1 className="requested__title">Requested Trolley</h1>
      </div>
      <div className="requested__list">
        <div className="requested__item__box requested__item__box__pending">
          <div className="request__left">
            <div className="image__box">
              <img src="/assets/freshGoods.png" alt="img" />
            </div>
            <p className="requested__text">Fresh Goods</p>
          </div>
          <div className="request__right">
            <p>Pending</p>
            <div className="actions__box">
              {style ? (
                <p className="to__where__house">W1</p>
              ) : (
                <div onClick={() => setShow(true)} className="trolley__actions">
                  <p>W1</p>
                </div>
              )}
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W2</p>
              </div>
            </div>
            <MdOutlineCancel className="cancelBtn" onClick={() => setStyle()} />
          </div>
        </div>
        <div className="requested__item__box requested__item__box__pending">
          <div className="request__left">
            <div className="image__box">
              <img src="/assets/fruit_Veg.png" alt="img" />
            </div>
            <p className="requested__text">Fruits & Veg</p>
          </div>
          <div className="request__right">
            <p>Pending</p>
            {/* <div className="actions__box">
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W1</p>
              </div>
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W2</p>
              </div>
            </div> */}
            <MdOutlineCancel className="cancelBtn" />
          </div>
        </div>
        <div className="requested__item__box requested__item__box__completed">
          <div className="request__left">
            <div className="image__box">
              <img src="/assets/deli.png" alt="img" />
            </div>
            <p className="requested__text">Deli</p>
          </div>
          <div className="request__right">
            <p>Completed</p>
            {/*<div className="actions__box">
               <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W1</p>
              </div>
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W2</p>
              </div> 
            </div>*/}
            <MdOutlineCancel className="cancelBtn" />
          </div>
        </div>
        <div className="requested__item__box requested__item__box__cancelled">
          <div className="request__left">
            <div className="image__box">
              <img className="frozen__img" src="/assets/frozen.png" alt="img" />
            </div>
            <p className="requested__text">Frozen</p>
          </div>
          <div className="request__right">
            <p>Cancelled</p>
            {/* <div className="actions__box">
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W1</p>
              </div>
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W2</p>
              </div> 
            </div>*/}
            <MdOutlineCancel className="cancelBtnFrozen" />
          </div>
        </div>
        <div className="requested__item__box requested__item__box__inProgress">
          <div className="request__left">
            <div className="image__box">
              <img src="/assets/wine_spritz.png" alt="img" />
            </div>
            <p className="requested__text">Wine Spritz</p>
          </div>
          <div className="request__right">
            <p>In Progress</p>
            {/*  <div className="actions__box">
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W1</p>
              </div>
              <div onClick={() => setShow(true)} className="trolley__actions">
                <p>W2</p>
              </div> 
            </div>*/}
            <MdOutlineCancel className="cancelBtn" />
          </div>
        </div>
      </div>
      {show && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShow(false)} />
            <p className="selected__text">
              Would you to place a trolley in:"W1"?
            </p>
            <Link
              onClick={() => {
                toggleStyle();
                setShow(false);
              }}
              className="confirm__btn"
            >
              Confirm
            </Link>
            <button onClick={() => setShow(false)} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requested;
