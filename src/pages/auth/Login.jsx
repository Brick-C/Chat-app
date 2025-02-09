import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import {
  activateAccountByLink,
  loginUser,
} from "../../features/auth/authApiSlice";
import useFormFields from "../../hooks/useFormFields";
import { createToast } from "../../utils/toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, error, user } = useSelector(getAuthData);

  const { input, resetForm, handleInputChange } = useFormFields({
    auth: "",
    password: "",
  });

  const handleUserLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/login");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }

    if (user) {
      navigate("/");
    }
  }, [message, error, resetForm, dispatch, navigate, user]);

  return (
    <>
      <PageHeader title="Sign In Here" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Login to Get Started"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="auth-form">
              <form onSubmit={handleUserLogin}>
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  value={input.auth}
                  onChange={handleInputChange}
                  name="auth"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleInputChange}
                  name="password"
                />
                <button>Log In</button>
              </form>
              <Link to="/forgot" className="forgot-password">
                Forgot Password
              </Link>
            </div>
          </div>

          <div className="bottom">
            <Link to="/register" className="email">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
