import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Harness from '../../data/harness.json'
import logoBHP from "./../../assets/logoBHP.png";
import classes from "./../Harness/harness.module.css";
import Form from 'react-bootstrap/form';

const harness = () => {
    const typeHarness = Harness.harnesType
    return (
        <div>

            <div>
            <img className={classes.BHPlogo} src={logoBHP} alt="imgLogo" />
            </div>
            <Form.Select aria-label="Selecciona tu tipo de arnés.">
             <option>Selecciona</option>
            <option value="1">Arnés trabajos generales</option>
            <option value="2">Arnés para soldadores</option>
            <option value="3">Arnés para eléctricos</option>
            </Form.Select>
         <h1 className={classes.TituloLinea}></h1>
            <div>
                {typeHarness.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.name +
                                " , " +
                                data.description +
                                ", " +
                                data.sap}
                        </div>
                    );
                })}
            </div>
            <Link>
        <Button href="/Checklist" className={classes.goChecklist}>
          Siguiente
        
        </Button>
      </Link>
        </div>
    )
}

export default harness
