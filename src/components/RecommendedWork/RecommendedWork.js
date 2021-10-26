import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./RecommendedWork.module.css";
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
    <div className={classes.label}>{label}</div>
    <input type='number' {...props}/>
  </div>
}

const Formulario = ({ variables, resultado, fijos, exportarAPDF = false, calcular }) => {
  const [valores, setValores] = React.useState([0,1.2,0,1,0])
  const [results, setResults] = React.useState("")




  return <div>
     <Form className={classes.form}>
    {variables.map((variable, ndx) => <Campo className={classes.campoSuma} key={variable} fijos={fijos} setValor={(valor) => {
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
    <p className={classes.pResults}> {results}</p>
    </div>
  </div>
}

const RecommendedWork = () => {
  let valoresFijos = {}
  valoresFijos["Elongación del amortiguador"] = 1.2
  valoresFijos["Margen de Seguridad"] = 1
  
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
     <div className={classes.lineRegistration}></div>
     
      <Formulario 
        variables={['Longitud del estrobo', 'Elongación del amortiguador', 'Estatura del trabajador', 'Margen de Seguridad', 'Espacio real del terreno']}
        resultado={'ELC'}
        fijos={valoresFijos}
        
        calcular={(valores) => {
          let suma = 0
          const otros = [...valores]
          const ert = otros.pop()
          for (const valor of otros) {
            suma = valor + suma
          }
          if (ert >= suma) {
            alert('Puedes')
          } else {
            alert('No podi')
          }
          return suma
        
        }}
        exportarAPDF />
    </div>
  );
};

export default RecommendedWork;
