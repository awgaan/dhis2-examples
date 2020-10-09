import React, { useState } from "react";
import { Checkbox } from "@dhis2/ui";
import classes from "./App.module.css";

const MyApp = () => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked((checked) => !checked);

  return (
    <div className={classes.container}>
      <Checkbox
        onChange={toggleCheckbox}
        checked={checked}
        label="Controlled checkbox using useState"
      />
    </div>
  );
};

export default MyApp;
