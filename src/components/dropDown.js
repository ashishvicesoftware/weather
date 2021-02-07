import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDown = () => {
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const [language, setLanguage] = useState("");

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Language</InputLabel>
        <Select value={language} onChange={changeLanguage} defaultValue="">
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hn">Hindi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
