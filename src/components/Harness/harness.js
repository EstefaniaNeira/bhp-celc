import React from 'react'
import Harness from '../../data/harness.json'
const harness = () => {
    console.log(Harness.harnesType)
    return (
        <div className="tituloLinea">
            <h1>Selecciona tu tipo de arnés.</h1>
            <div>
            </div>
        </div>
    )
}

export default harness
