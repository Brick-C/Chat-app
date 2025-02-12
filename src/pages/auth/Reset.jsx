import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../../hooks/useFormFields";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { resetPasswordAction } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";
import Cookie from "js-cookie";

const Reset = () => {
  //hooks
  const dispatch = useDispatch();
  const { message, error, loader } = useSelector(getAuthData);
  const navigate = useNavigate();
  const token = Cookie.get("verifyToken");

  //form field manage
  const { input, handleInputChange, resetForm } = useFormFields({
    newPassword: "",
    confPassword: "",
    otp: "",
  });

  //handle reset password
  const handleResetPassword = (e) => {
    e.preventDefault();

    dispatch(resetPasswordAction({ token, input }));
  };

  //dispatch
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
      <PageHeader title="Forgot Password" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Reset Your Password"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="auth-form">
              <form onSubmit={handleResetPassword}>
                <input
                  type="text"
                  placeholder="New Password"
                  value={input.newPassword}
                  name="newPassword"
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  placeholder="Confirm Password"
                  value={input.confPassword}
                  name="confPassword"
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  placeholder="Activation Code"
                  value={input.otp}
                  name="otp"
                  onChange={handleInputChange}
                />

                <button type="submit">
                  {loader ? "Reseting Password..." : "Reset Password"}
                </button>
              </form>
            </div>
          </div>

          <div className="bottom">
            <Link to="/login" className="email">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
