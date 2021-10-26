import React from "react";
import classes from "./../Checklist/Checklist.module.css";
import check from "react-bootstrap/formcheck";

const Checklist = () => {
  return (
    <div>
      <h1 clasName={classes.titleChecklist}>Check-list</h1>
      <h2>Arnés de seguridad y punto de anclaje </h2>
      
      <div className={classes.lineChecklist}></div>
      <h3>Estado de Arnés</h3>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
    </div>
  );
};

export default Checklist;
