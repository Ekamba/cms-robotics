import { useState } from "react";
import "./login.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = username !== null;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    navigate("/category");
  };
  return (
    <div className="login__container">
      <div className="login__logo">
        <Link to="/">
          <img
            src="/assets/COSMIC COBALT logo 1.png"
            alt="app/logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="login__inner__container">
        <div className="login__title">
          <p className="title">Serena at your </p>
          <span className="title">fingertips</span>
        </div>
        <img
          src="/assets/undraw_shopping_app_flsj(1) 1.png"
          alt=""
          className="retail__img"
        />
        <div className="form__container">
          <form className="form__input" onSubmit={handleSubmit}>
            <p className="form__title">Let's get started!</p>
            <div className="input__container">
              <input
                type="email"
                name="email"
                placeholder="Username"
                required
                className="form__input__field"
                id="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <img src="/assets/User_circle.png" alt="user/icon" />
            </div>
            <div className="input__container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="form__input__field"
                id="email"
                onChange={({ target }) => setPassword({ target }.value)}
              />
              <img src="/assets/Key.png" alt="key/icon" />
            </div>
            <button className="form__button" type="submit">
              <p>Continue</p>
              <MdOutlineKeyboardArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
