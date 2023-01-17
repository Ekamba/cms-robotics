import "./requested.css";
import { useEffect, useState } from "react";

import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Requested = () => {
  const [showW1, setShowW1] = useState(false);
  const [showW2, setShowW2] = useState(false);
  const [styleW1, setStyleW1] = useState(false);
  const [styleW2, setStyleW2] = useState(false);

  useEffect(() => {
    document.title = "Requested Trolley";
  });

  const toggleStyleW1 = () => {
    setStyleW1((prevState) => !prevState);
  };
  const toggleStyleW2 = () => {
    setStyleW2((prevState) => !prevState);
  };

  const toggleShow1 = () => {
    setShowW1((prevState) => !prevState);
  };

  const toggleShow2 = () => {
    setShowW2((prevState) => !prevState);
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
              {styleW1 ? (
                <p className="to__where__house">W1</p>
              ) : (
                <div onClick={toggleShow1} className="trolley__actions">
                  <p>W1</p>
                </div>
              )}
              {showW1 && (
                <div className="modal">
                  <div className="inner__modal">
                    <RxCross2 onClick={toggleShow1} />
                    <p className="selected__text">
                      Would you to place a trolley in:"W1"?
                    </p>
                    <Link
                      onClick={() => {
                        toggleShow1();
                        toggleStyleW1();
                      }}
                      className="confirm__btn"
                    >
                      Confirm
                    </Link>
                    <button onClick={toggleShow1} className="cancel__btn">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              <div className="action__box">
                {styleW2 ? (
                  <p className="to__where__house">W2</p>
                ) : (
                  <div onClick={toggleShow2} className="trolley__actions">
                    <p>W2</p>
                  </div>
                )}
                {showW2 && (
                  <div className="modal">
                    <div className="inner__modal">
                      <RxCross2 onClick={toggleShow2} />
                      <p className="selected__text">
                        Would you to place a trolley in:"W2"?
                      </p>
                      <Link
                        onClick={() => {
                          toggleStyleW2();
                          toggleShow2();
                        }}
                        className="confirm__btn"
                      >
                        Confirm
                      </Link>
                      <button onClick={toggleShow2} className="cancel__btn">
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <MdOutlineCancel
              className="cancelBtn"
              onClick={() => {
                setStyleW1(false);
                setStyleW2(false);
              }}
            />
          </div>
        </div>
        <div className="requested__item__box requested__item__box__pending">
          <div className="request__left">
            <div className="image__box">
              <img src="/assets/fruit_veg.png" alt="img" />
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
      {/* {showW1 && (
        <div className="modal">
          <div className="inner__modal">
            <RxCross2 onClick={() => setShowW1(false)} />
            <p className="selected__text">
              Would you to place a trolley in:"W1"?
            </p>
            <Link
              onClick={() => {
                toggleStyleW1();
                setShowW1(false);
              }}
              className="confirm__btn"
            >
              Confirm
            </Link>
            <button onClick={() => setShowW1(false)} className="cancel__btn">
              Cancel
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Requested;
