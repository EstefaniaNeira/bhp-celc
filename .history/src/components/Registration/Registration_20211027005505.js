import React, { useState } from "react"; //useState  variable que se pueden ir modificando
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Registration/Registration.module.css";
import BHPlogo from "./../../assets/logoBHP.png";
import sos from "./../../assets/sos.png";
import Form from "react-bootstrap/Form";
import dbFirebase from "./../../data/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

//setNamen es la funcion (2do parametro) para cambiarle el valor al estado (name)
const Registration = () => {
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");
  const [db] = useState(dbFirebase);
  const handleSubmit = async (e) => {
    e.preventDefault(); //previene que se caiga la app
    if (name !== null && rut !== null) {
      const loginRef = doc(collection(db,"login"))
      await setDoc(loginRef, ) {
        name: name,
        rut: rut,
      });
    }
    console.log("onClick");
  };
  const onChangeName = (value) => {
    setName(value);
    console.log(name);
  };

  const onChangeRut = (value) => {
    setRut(value);
    console.log(rut);
  };
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
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2"></label>
          <input
            type="text"
            className={classes.formcontrol}
            id="formGroupExampleInput2"
            value={rut}
            onChange={(e) => onChangeRut(e.target.value)}
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
