import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./activateLogin.css";
import AuthHeader from "../../components/authHeader/AuthHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  activateAccountByLink,
  activateAccountByOtp,
} from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { createToast } from "../../utils/toast";
import useAuthUser from "../../hooks/useAuthUser";

const ActivateLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      navigate("/login");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, resetForm, dispatch, navigate]);

  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title={user.name}
              desc="You Must Activate your account"
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
        </div>
      </div>
    </>
  );
};

export default ActivateLogin;
