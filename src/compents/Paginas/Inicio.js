import React from 'react'
import "./Estilos/Inicio.css";
import image from "./Imagenes/domicilio.jpeg";

import imagen13 from "./Imagenes/Domicilio1.jpeg";
import imagen14 from "./Imagenes/Domicilio2.jpeg";
import image2 from "./Imagenes/foto3.jpeg";


const Inicio = () => {
  return (
    

  
    <div id='articulos' >
    
       <br/>
       <br/>
  
       
  
   
         <h2>  Municipio de La Trinitaria Chiapas </h2>
         <br/>
       <br/>
       BARRIO CENTRO MUNICIPIO DE LA TRINITARIA CHIAPAS
Mi domicilio Actualmente es en el Municipio de la Trinitaria en el barrio 
Centro C SIN NOMBRE S/N BARRIO CENTRO 30160. A un costado del consultoria Matinas Burgo.
       
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       
       
       <h3> <i>GALERIA DE FOTOS</i> </h3>
       <div id='imagen1'>
        <img src={image} width="500" height="400"/>
      </div>
      
      <div id='imagen13'>
        <img src={imagen13} width="500" height="400"/>
      </div>
      <div id='imagen14'>
        <img src={imagen14} width="500" height="400"/>
      </div>
      <div id='imagen2'>
        <img src={image2} width="500" height="400"/>
      </div>
      

      <br/>

  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


<br/>
    </div>
    
  )


  
}


export default Inicio




    

