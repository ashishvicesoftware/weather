import React from "react";

import { DropDown } from "../components";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <Typography variant="h3">{t("weatherText.label")}</Typography>
      <DropDown />
    </div>
  );
};

export default Home;
