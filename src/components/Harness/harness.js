import React, { useState } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { harnesType } from '../../data/harness.json'
import logoBHP from "./../../assets/logoBHP.png";
import classes from "./../Harness/harness.module.css";
import Form from 'react-bootstrap/form';
import TituloLinea from '../RecommendedWork/TituloLinea';

const Harness = () => {
    const [type, setType] = useState(0)


    return (
        <div>
            
            <TituloLinea texto={"Selecciona tu tipo de arnés"} />

            <Form.Select className={classes.formSelect} aria-label="Selecciona tu tipo de arnés." onChange={(e) => {
                setType(Number(e.target.value))
            }}>
                <option>Selecciona</option>
                <option value="1">Arnés trabajos generales</option>
                <option value="2">Arnés para soldadores</option>
                <option value="3">Arnés para eléctricos</option>
            </Form.Select>
            <h1></h1>
                <div>
                    {harnesType.filter(harnes => harnes.id === type).map((data, key) => {
                        return (
                            <div className={classes.imageSelector} key={key}>
                                <img src={data.image} className={classes.imageSelector} />
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
            <Button href="/Checklist" className={classes.goChecklist} disabled={!type}>
            Siguiente
            
            </Button>
        </Link>
        </div>
    )
}

export default Harness

