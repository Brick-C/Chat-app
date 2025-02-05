import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";

const Login = () => {
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
              <form action="">
                <input type="text" placeholder="Email or Phone number" />
                <input type="password" placeholder="Password" />
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
