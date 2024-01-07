import React, { useState } from 'react';

function Input({ divisa, onCantidadChange, result }) {
    
    let disabled = divisa !== 'Euro' ? true : false;
    
    
    /* Obtenemos el valor del input de Euros y ese input lo mandamos
     a la funcion onCantidadChange para que sea trabajado el valor en conversor*/
     const modificar = (e) =>{
        
        const inputCantidad = parseFloat(e.target.value);
        onCantidadChange(inputCantidad);
    }
     
     


    return (
        <div className="input-container">
            <label htmlFor={divisa} name={divisa}>
                {divisa}
            </label>
            <input type="number" 
                   name={divisa} 
                    id={divisa} 
                    disabled={disabled}
                    value={result ? result : ''}
                    onChange={modificar}
                   />

        </div>
    );
}

export default Input;