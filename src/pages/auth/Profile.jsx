import React from "react";
import TopBar from "../../components/topBar/TopBar";
import { Link } from "react-router-dom";
import "./auth.css";
import { Avatar } from "@chakra-ui/avatar";
import useAuthUser from "../../hooks/useAuthUser";

const Profile = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <div className="profile-photo-wrap">
              <Avatar className="avatar" src={null} name={user.name} />
            </div>
          </div>

          <div className="bottom">
            <Link to="/" className="facebook">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
