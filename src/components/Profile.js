import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>Profile</h1>
      <h1>Welcome {auth.user}</h1>
      <button
        onClick={() => {
          auth.logeout();
          navigate("/");
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Profile;
