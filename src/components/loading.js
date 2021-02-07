import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return (
    <div className="spinner">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};

export default Loading;
