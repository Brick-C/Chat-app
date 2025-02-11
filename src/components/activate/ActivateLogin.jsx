import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./activateLogin.css";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  activateAccountByLink,
  activateAccountByOtp,
  resendActivation,
} from "../../features/auth/authApiSlice";
import Cookie from "js-cookie";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { createToast } from "../../utils/toast";
import useAuthUser from "../../hooks/useAuthUser";
import { hideEmailMiddle } from "../../helpers/helpers";

const ActivateLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Cookie.get("verifyToken");
  const { message, error, loader } = useSelector(getAuthData);
  const { user } = useAuthUser();
  const { input, resetForm, handleInputChange } = useFormFields({
    otp: "",
  });

  const handleUserActivate = (e) => {
    e.preventDefault();

    dispatch(activateAccountByOtp({ token: token, otp: input.otp }));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, resetForm, dispatch, navigate]);

  const handleResendActivation = (e, auth) => {
    e.preventDefault();

    dispatch(resendActivation(auth));
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <h1>
              Hello👋{user.name}, you must activate your account to continue.
            </h1>
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

              {user.email && (
                <a
                  onClick={(e) => handleResendActivation(e, user?.email)}
                  href="#"
                  id="resend"
                >
                  Resend Activation code to {hideEmailMiddle(user?.email)}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateLogin;
