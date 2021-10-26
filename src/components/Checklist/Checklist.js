import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../Checklist/Checklist.module.css";


const Checklist = () => {
  return (
    <>
      <div>
        <h1 clasName={classes.titleChecklist}>Check-list</h1>
        <h2>Arnés de seguridad y punto de anclaje </h2>
      </div>
      <div className={classes.lineChecklist}></div>
      <h3>Estado de Arnés</h3>
      <div class="form-check">
        ¿Se encuentra libre de grasas,pinturas,etc.?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Tiene hebras cortadas o dañadas?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Presenta costuras deshilachadas?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Posee la placa de identificación?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Se encontraba correctamente almacenado?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿presenta cortes o desgarros?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Posee el tag de ispección cesmec?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
      </div>
      <h4>Estado de los Accesorios</h4>
      <div class="form-check">
        ¿Los anillos en D presentan desformaciones?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Están las hebillas en buen estado?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Mantiene los elementos plásticos?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Los elementos plásticos están en buen estado?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
      </div>
      <h5>Estado de la cuerda de vida </h5>
      <div class="form-check">
        ¿Se encuentra libre de grasas,puntura, etc.?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Están los ganchos en buen estado?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Presenta cortes en sus hebras?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        ¿Presenta costuras deshilachadas?
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        <h6>Estado de los puntos de anclaje </h6>
        <div class="form-check">
          ¿Se visualiza alguna modificación o alteración del punto de anclaje?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿El punto de anclaje a utilizar esta identificado de color amarillo?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿Se encuentra accesible el punto de anclaje a utilizar?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿Existe deformación en alguno de los
          componentes(argolla,placa,pernos,etc.)?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿Se encuentra instaladala placa identificadora que muestra el código,
          capacidad y estado de aprobación?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿Esta placa cuenta con la fecha de validación, tipo y fijación de
          anclaje?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          ¿Se aprecian fisuras o golpes en el punto de anclaje?
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <Link>
            <Button
              exact
              href="/RecommendedWork" className={classes.buttonCalculationChecklist}>
              Calcular ELC
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checklist;
