import React from "react";
import classes from "./../SOS/SOS.module.css";
import logoBHP from "./../../assets/logoBHP.png";
import sos from "./../../assets/sos.png";
//import { BrowserRouter as Link } from "react-router-dom";
//import Button from "react-bootstrap/Button";

const SOS = () => {
    return (
        <div>
            <img className={classes.logooBHP} src={logoBHP} alt="imgLogo" />
            <img className={classes.SOSIcoN} src={sos} alt="SOSicom"></img>
            <div>ESPERE UN MOMENTO, LO ESTAMOS CONTACTANDO CON EL SUPERVISOR MAS CERCANO</div>
        </div>
    )
}

export default SOS;