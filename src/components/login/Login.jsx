import { useState } from "react";
import "./login.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const submitForm = (data) => {
    if (data.username || data.password === null) {
      return "all fields are required";
    } else {
      handleSubmit((data) => console.log(data));
      navigate("/category");
    }
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
          <form className="form__input" onSubmit={submitForm}>
            <p className="form__title">Let's get started!</p>
            <div className="input__container">
              <input
                {...register("username", {
                  required: "Username must be provided.",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                })}
                type="username"
                name="username"
                placeholder="Username"
                className="form__input__field"
              />
              <img src="/assets/User_circle.png" alt="user/icon" />
            </div>
            <p className="error__message">{errors.username?.message}</p>
            <div className="input__container">
              <input
                {...register("password", {
                  required: "Password must be provided.",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 3 characters long",
                  },
                })}
                type="password"
                name="password"
                placeholder="Password"
                className="form__input__field"
              />
              <img src="/assets/Key.png" alt="key/icon" />
            </div>
            <p className="error__message">{errors.password?.message}</p>
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
