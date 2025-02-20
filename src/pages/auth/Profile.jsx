import React, { useState } from "react";
import TopBar from "../../components/topBar/TopBar";
import { Link } from "react-router-dom";
import "./auth.css";
import { Avatar } from "@chakra-ui/avatar";
import useAuthUser from "../../hooks/useAuthUser";
import { useDispatch } from "react-redux";
import { uploadUserPhoto } from "../../features/auth/authApiSlice";

const Profile = () => {
  const { user } = useAuthUser();
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleUploadPhoto = (e) => {
    const profilePhoto = e.target.files[0];

    const form_data = new FormData();

    form_data.append("profile-photo", profilePhoto);

    dispatch(uploadUserPhoto({ data: form_data, id: user._id }));
  };
  return (
    <>
      <TopBar />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <div className="profile-photo-wrap">
              <Avatar className="avatar" src={user.photo} name={user.name} />

              <label className="profile-photo-upload">
                <p>
                  <span>📸</span> Upload a photo
                </p>
                <input type="file" onChange={handleUploadPhoto} />
              </label>
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
