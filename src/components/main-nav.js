import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const MainNav = () => {
  const { user } = useAuth0();
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        {t("home.label")}
      </NavLink>
      <NavLink
        to="/weather"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        {t("weather.label")}
      </NavLink>
      {user ? (
        <NavLink
          to="/logOut"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          {t("logOut.label")}
        </NavLink>
      ) : null}
    </div>
  );
};

export default MainNav;
