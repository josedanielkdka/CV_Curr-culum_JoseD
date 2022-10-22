import React from 'react'
import image3 from "./Imagenes/Prescolar.jpg";
import image4 from "./Imagenes/Primaria.jpeg";
import image5 from "./Imagenes/Secundaria.jpg";
import image6 from "./Imagenes/Preparatoria.jpg";
import imagenP1 from "./Imagenes/Univercidad.jpeg";

<br/>
const Galeria = () => {
  return (
    <div id='articulos3' >
    
       <br/>
       <br/>
  
       <br/>
       <br/>
  
  
               <h2>  PRESCOLAR </h2>
               <br/>
               <br/>
  
               Inicie mis primeros estudios en el prescolar en la Instalación Juan Escutia en periodo Julio 2004 a Mayo
                2007. Está Institución se encuentra Ubicado en AV poniente S/N La Trinitaria Chiapas....................
                 Promedio: 97
                 <br/>
              
   

       <div id='imagen3'>
        <img src={image3} width="500" height="400"/>
      </div>

      <br/>

  
<br/>



<div id='articulos4'>
       
<br/>
<br/>
<br/>
<br/>
<h2>  PRIMARIA </h2>
<br/>
<br/>
Estudie mi Nivel de primaria en la Institución que lleva por nombre Prof. Policronio Figueroa en el periodo Agosto 2007 a Abril 2012.
 Esta Institución se encuentra ubicada en AV Norte Centro S/N La Trinitaria Chiapas..........
<br/>
Promedio: 99.3
<br/>


<div ></div>

<div id='imagen4'>
        <img src={image4} width="500" height="400" />
      </div>

      </div>

<br/>

<div id='articulos5'>
       
<br/>
<br/>
<br/>
<br/>
<h2>  SECUNDARIA   </h2>
<br/>
<br/>
Estudie mi Nivel de Secundaria en la Institución que lleva por nombre Tecnica 44 en el periodo Agosto 2012 a Agosto 2015. 
Esta Institución se encuentra ubicada en AV Norte Centro Barrio La Cruz Grande S/N La Trinitaria Chiapas....................
<br/>
Promedio: 98.3
<br/>


<div ></div>

<div id='imagen5'>
        <img src={image5} width="500" height="400" />
      </div>

      </div>

<br/>
<div id='articulos6'>
       
<br/>
       <br/>
       <br/>
       <br/>
       <h2>  PREPARATORIA </h2>
       <br/>
       <br/>
       Estudie mi Nivel Media Superior en la Institución que lleva por nombre Colegio de Estudios Científicos y Tecnológicos del Estado de Chiapas (CECYTECH) 
       en el  periodo Agosto 2016 a Mayo 2015. Esta Institución se encuentra ubicada en AV Poniente Barrio san Jose S/N La Trinitaria Chiapas....................
       <br/>
       Promedio: 95.3
       <br/>
       
       
       <div ></div>
       
       <div id='imagen6'>
               <img src={image6} width="500" height="400" />
             </div>
       
             </div>
       
       <br/>
       <div id='articulos6'>
       
       <br/>
              <br/>
              <br/>
              <br/>
              <h2> UNIVERCIDAD</h2>
              <br/>
              <br/>
              Actualmente me encuentro cursando mi Nivel Superior universidad en el Instituto Tecnológico De Comitán en la carrera de ingeniería en sistemas computacionales.
               Esta intuición se encuentra ubicada en Avenida Instituto Tecnológico Kilómetro 3.5, Los Sabinos, 30000 Comitán de Domínguez, Chis....................
       
              <br/>
              Promedio Actual: 95.4
              <br/>
              
              
              <div ></div>
              
              <div id='imagenP1'>
                      <img src={imagenP1} width="500" height="400" />
                    </div>
              
                    </div>





    </div>
    
    
  )


  
}


export default Galeria
