import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";
import Cookie from "js-cookie";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  activateAccountByLink,
  activateAccountByOtp,
} from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { createToast } from "../../utils/toast";

const Activation = () => {
  const token = Cookie.get("verifyToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, error, loader } = useSelector(getAuthData);

  const { tokenUrl } = useParams();
  console.log(tokenUrl);

  const { input, resetForm, handleInputChange } = useFormFields({
    otp: "",
  });

  const handleUserActivate = (e) => {
    e.preventDefault();

    dispatch(activateAccountByOtp({ token: token, otp: input.otp }));
  };

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (tokenUrl) {
      dispatch(activateAccountByLink(tokenUrl));
    }
  }, [tokenUrl, dispatch]);

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
  }, [message, error, resetForm, dispatch, navigate]);

  return (
    <>
      <PageHeader title="Activate account" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Activate your account"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="auth-form">
              <form onSubmit={handleUserActivate}>
                <input
                  type="text"
                  placeholder="Activation code"
                  value={input.otp}
                  onChange={handleInputChange}
                  name="otp"
                />

                <button>{loader ? "Activating..." : "Activate Now"}</button>
              </form>

              <a href="#" id="resend">
                Resend Activation code to ta*******0@gmail.com
              </a>
            </div>
          </div>

          <div className="bottom">
            <Link to="/login" className="email">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activation;
