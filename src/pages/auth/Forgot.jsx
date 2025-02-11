import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../../hooks/useFormFields";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { resetPassword } from "../../features/auth/authApiSlice";

const Forgot = () => {
  //hooks
  const dispatch = useDispatch();
  const { message, error, loader } = useSelector(getAuthData);
  const navigate = useNavigate();

  //form field manage
  const { input, handleInputChange, resetForm } = useFormFields({
    auth: "",
  });

  //handle reset password
  const handleResetPassword = (e) => {
    e.preventDefault();

    dispatch(resetPassword(input));
  };

  //dispatch
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
      resetForm();
      navigate("/activation");
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
                  placeholder="Email or Phone number"
                  value={input.auth}
                  name="auth"
                  onChange={handleInputChange}
                />

                <button type="submit">Reset Password</button>
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

export default Forgot;
