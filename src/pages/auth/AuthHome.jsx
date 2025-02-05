import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import AuthHeader from "../../components/authHeader/AuthHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
const AuthHome = () => {
  return (
    <>
      <PageHeader title="Welcome to Chat App" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Chat App"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className="bottom">
            <Link to="/login" className="facebook">
              Login with Facebook
            </Link>
            <Link to="/login" className="email">
              Login with Phone or Email
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHome;
