import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";
import Cookie from "js-cookie";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch } from "react-redux";
import { activateAccountByOtp } from "../../features/auth/authApiSlice";

const Activation = () => {
  const token = Cookie.get("verifyToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

                <button>Activate Now</button>
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
