import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-uv974d-9.us.auth0.com";
  const clientId = "lSc3hosVQsXpj0eNS0bxTcLu8tQtZmCQ";

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
