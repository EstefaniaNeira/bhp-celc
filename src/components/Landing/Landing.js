import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Landing/Landing.module.css";
import imgLanding from "./../../assets/imgLanding.jpg";
import logoBHP from "./../../assets/logoBHP.png";

const Landing = () => {
  return (
    <div>
        <div>
            <img className={classes.logoBHP} src={logoBHP} alt="imgLogo" />
        </div>
      <img className={classes.imgBody} src={imgLanding} alt="imgLanding" />
      <h1 className={classes.titleLanding}>Safe Scale</h1>
      <div className={classes.lineLanding}></div>
      <h3 className={classes.textLanding}>
        Te damos la bienvenida a nuestro asistente para el trabajo en altura,
        que te aportará información y rapidez en el proceso.
      </h3>
      <Link>
        <Button exact href="/Registration" className={classes.buttonLanding}>
          Comenzar
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
