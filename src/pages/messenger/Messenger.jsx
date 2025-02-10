import React from "react";
import TopBar from "../../components/topBar/TopBar";
import useAuthUser from "../../hooks/useAuthUser";
import ActivateLogin from "../../components/activate/ActivateLogin";

const Messenger = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      {user.accessToken ? <ActivateLogin /> : <h1>Main Content</h1>}
    </>
  );
};

export default Messenger;
