import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Registration/Registration.module.css";

const Registration = () => {
  return (
    <div>
      <h1> Ingresa datos</h1>
      <Link>
        <Button exact href="/" className={classes.buttonRegistration}>
          enviar información
        </Button>
      </Link>
    </div>
  );
};

export default Registration;
