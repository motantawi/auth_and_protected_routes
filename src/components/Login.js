import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleClick = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <h1>
      <label>
        UserName :
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <br /> <button onClick={handleClick}>Login</button>
    </h1>
  );
};

export default Login;
