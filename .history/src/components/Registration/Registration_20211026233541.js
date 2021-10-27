import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Registration/Registration.module.css";
import BHPlogo from "./../../assets/logoBHP.png";
import sos from "./../../assets/sos.png";
import Form from "react-bootstrap/Form";

const Registration = () => {
  return (
    <div>
      <div>
        <img className={classes.BHPlogo} src={BHPlogo} alt="imgLogo"></img>
        <Link>
          <Button exact href="SOS" className={classes.SOS}>
            <img className={classes.SOSIcon} src={sos} alt="SOSicom"></img>
          </Button>
        </Link>
      </div>
      <div className={classes.titleRegistration}>Datos mantenedor</div>
      <div className={classes.lineRegistration}></div>

      <Form>
        <div class="form-group">
          <label for="formGroupExampleInput"></label>
          <input
            type="text"
            className={classes.formcontrol}
            id="formGroupExampleInput"
            placeholder="Nombre y Apellido"
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2"></label>
          <input
            type="text"
            className={classes.formcontrol}
            id="formGroupExampleInput2"
            placeholder="Rut"
          ></input>
        </div>
        <div>
          <input
            className={classes.Circle}
            type="radio"
            name="empleoactual"
            value="tiempocompleto"
          ></input>{" "}
          <a
            exact
            href="https://www.bhp.com/terms-of-use
"
            className={classes.AceptoTerminosyCondiciones}
          >
            Acepto términos y condiciones de uso
          </a>
        </div>

        <Link>
          <Button
            exact
            href="/Harness"
            className={classes.buttonRegistration}
            onClick={(e) => handleSubmit(e)}
          >
            Siguiente
          </Button>
          <Button
            exact
            href="/RecommendedWork"
            className={classes.buttonCalculation}
          >
            Calcular ELC
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Registration;
