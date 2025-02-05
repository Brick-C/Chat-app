import React from "react";
import { Link } from "react-router-dom";
const AuthHeader = ({ title, desc }) => {
  return (
    <>
      <div className="header">
        <Link to="/auth">
          <img
            id="logo"
            src="https://cdn-icons-png.flaticon.com/512/6072/6072846.png"
            alt="logo"
          />
        </Link>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default AuthHeader;
