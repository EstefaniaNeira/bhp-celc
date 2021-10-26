import React from 'react'
import Harness from '../../data/harness.json'
const harness = () => {
    const typeHarness = Harness.harnesType
    return (
        <div className="tituloLinea">
            <h1>Selecciona tu tipo de arnés.</h1>
            <div className="stock-container">
                {typeHarness.map((data, key) => {
                    return (
                        <div className={classes.lineRegistration} key={key}>
                            {data.name +
                                " , " +
                                data.description +
                                ", " +
                                data.sap}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default harness
