import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Checklist/Checklist.module.css";
import RecommendedWork from "../RecommendedWork/RecommendedWork";

const Checklist = () => {
  return (
    <>
      <div>
        <h1 className={classes.textChecklist}>Check-list</h1>
        <h2 className={classes.textSubCheck}>
          Arnés de seguridad y punto de anclaje
        </h2>
      </div>
      <div className={classes.lineChecklist}></div>

      <h3 className={classes.textlist}>Estado de Arnés</h3>
      <div className={classes.inputTextlist}>
        <p>
          ¿Se encuentra libre de grasas,pinturas,etc.?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Tiene hebras cortadas o dañadas?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Presenta costuras deshilachadas?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Posee la placa de identificación?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Se encontraba correctamente almacenado?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿presenta cortes o desgarros?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Posee el tag de ispección cesmec?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
      </div>
      <h4 className={classes.textlist}>Estado de los Accesorios</h4>
      <div className={classes.textlist}>
        <p>
          ¿Los anillos en D presentan desformaciones?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Están las hebillas en buen estado?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Mantiene los elementos plásticos?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Los elementos plásticos están en buen estado?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
      </div>
      <h5 className={classes.textlist}>Estado de la cuerda de vida </h5>
      <div className={classes.textlist}>
        <p>
          ¿Se encuentra libre de grasas,puntura, etc.?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Están los ganchos en buen estado?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Presenta cortes en sus hebras?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <p>
          ¿Presenta costuras deshilachadas?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
        </p>
        <h6 className={classes.textlist}>Estado de los puntos de anclaje </h6>
        <div className={classes.textlist}>
          <p>
            ¿Se visualiza alguna modificación o alteración del punto de anclaje?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>{" "}
          </p>
          <p>
            ¿El punto de anclaje a utilizar esta identificado de color amarillo?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
          <p>
            ¿Se encuentra accesible el punto de anclaje a utilizar?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
          <p>
            ¿Existe deformación en alguno de los
            componentes(argolla,placa,pernos,etc.)?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
          <p>
            ¿Se encuentra instaladala placa identificadora que muestra el
            código, capacidad y estado de aprobación?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
          <p>
            ¿Esta placa cuenta con la fecha de validación, tipo y fijación de
            anclaje?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
          <p>
            ¿Se aprecian fisuras o golpes en el punto de anclaje?
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </p>
        </div>
      </div>
      <Link>
        <Button href="/RecommendedWork" className={classes.buttonCalculationChecklist}>
          Calcular ELC
        </Button>
      </Link>
    </>
  );
};

export default Checklist;
