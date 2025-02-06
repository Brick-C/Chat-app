import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import AuthHeader from "../../components/authHeader/AuthHeader";

const Activation = () => {
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
              <form action="">
                <input type="text" placeholder="Activation code" />

                <button>Activate Now</button>
              </form>
            </div>
          </div>

          <div className="bottom">
            <Link to="/login" className="email">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activation;
