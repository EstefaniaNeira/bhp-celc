import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./../RecommendedWork/RecommendedWork.module.css";
import BHPlogo from "./../../assets/logoBHP.png";
import sos from "./../../assets/sos.png";
import Form from "react-bootstrap/Form";

const TituloLinea = ({ texto }) => <h3 className={classes.TituloLinea}>{texto}</h3>

const Campo = ({ label, setValor, fijos }) => {
  const props = {
    disabled: Object.keys(fijos).includes(label)
  }

  if (props.disabled) {
    props.value = fijos[label]
  } else {
    props.onChange = (ev) => {
      setValor(Number(ev.target.value))
    }
  }

  return <div className='Campo'>
    <div className='label'>{label}</div>
    <input type='number' {...props}/>
  </div>
}

const Formulario = ({ variables, resultado, fijos, exportarAPDF = false, calcular }) => {
  const [valores, setValores] = React.useState([0,1.2,0,1,0])
  const [results, setResults] = React.useState("")




  return <div>
     <Form className={classes.form}>
    {variables.map((variable, ndx) => <Campo key={variable} fijos={fijos} setValor={(valor) => {
      const guardado = [...valores]
      guardado[ndx] = valor
      console.log({ guardado, valor })
      setValores(guardado)
    }} label={variable} />)}
      
    
    <Button className={classes.buttonForm} onClick={() => {
    console.log(calcular(valores))
    setResults(calcular(valores))
    }}>Calcular {resultado}</Button>
  </Form> 

    <div>
    <p>El resultado final es :   {results}</p>
    </div>
  </div>
}

const RecommendedWork = () => {
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

      <TituloLinea
        texto={"Cálculo Espacio libre de caída"} />

      <Formulario
        variables={['Longitud del estrobo', 'EA', 'Estatura del trabajador', 'MS', 'Espacio real del terreno']}
        resultado={'ELC'}
        fijos={{
          EA: 1.2,
          MS: 1
        }}
        calcular={(valores) => {
          let suma = 0
          for (const valor of valores) {
            console.log(valor)
            suma = valor + suma
          }
          return suma
        }}
        exportarAPDF />
    </div>
  );
};

export default RecommendedWork;
