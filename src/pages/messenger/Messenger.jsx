import React from "react";
import TopBar from "../../components/topBar/TopBar";
import useAuthUser from "../../hooks/useAuthUser";
import ActivateLogin from "../../components/activate/ActivateLogin";
import MessengerHome from "../../components/messengerHome/MessengerHome";

const Messenger = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      {user.accessToken ? <ActivateLogin /> : <MessengerHome />}
    </>
  );
};

export default Messenger;
