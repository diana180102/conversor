import React, { useState } from 'react';
import "../css/conversor.css";
import Input from "./input";


function Conversor() {
  const cambios = [
    { 
      id:1,
      moneda: "Euro",
      cambio: 1,
    },
    {
      id:2,
      moneda: "Peso argentino",
      cambio: 888.63,
    },
    {
      id:3,
      moneda: "Peso colombiano",
      cambio: 4266.25,
    },
    {
      id:4,
      moneda: "Peso mexicano",
      cambio: 18.55,
    },
    {
      id:5,
      moneda: "Dólar",
      cambio: 1.09,
    },
  ];
 
 
  const [result, setResult] = useState({});
  
   
   const cantidadChanged = (monto) =>{
      
      //creamos un nuevo arreglo de objetos
      const newResult = {};
      
      /* iteramos sobre el objeto cambios y 
       al nuevo objeto mandamos el resultado  
       de monto * cada una de las divisas del objeto cambio
       y como último mandamos el objeot nuevo a setResult
         */
      cambios.forEach(divisa => {
        
        if(divisa.moneda!=='Euro'){
        newResult[divisa.moneda] = (monto * divisa.cambio).toFixed(2);
        }else{
          newResult[divisa.moneda] = monto;
        }
      })

      setResult(newResult);
      
   }
   
     
     
    
  
    



  return (
    <div className="conversor-container">
      {/* Imprimimos varios inputs de acuerdo a la cantidad 
        de datos en el objeto y mandamos los datos al inputs.
         
         En onCantidadChange mandamos una función anonima que
         recibe como parametro la cantidad ingresada y luego 
         es enviada a la función cantidadChanged
        
        
      */}
      {
        cambios.map(divisa => 
             <Input
                key={divisa.id} 
                divisa={divisa.moneda}
                onCantidadChange={(monto) => cantidadChanged(monto)}
                result={result[divisa.moneda]}
                
             >
             </Input>
        )
      }
       
     



     
    </div>
  );
}

export default Conversor;
