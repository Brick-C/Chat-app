import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";

const Register = () => {
  return (
    <>
      <PageHeader title="Create Your Account" />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <AuthHeader
              title="Register to Get Started"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="auth-form">
              <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email or Phone number" />
                <input type="password" placeholder="Password" />
                <button>Create Account</button>
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

export default Register;
