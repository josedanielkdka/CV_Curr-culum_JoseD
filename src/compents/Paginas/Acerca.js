import React from 'react'
import image7 from "./Imagenes/correr.jpg";
import image8 from "./Imagenes/escucharmusica.png";
import image9 from "./Imagenes/lectura.jpg";
import image10 from "./Imagenes/nadar.jpg";
import image11 from "./Imagenes/bailar.jpg";
import image12 from "./Imagenes/dibujar.jpg";


const Acerca = () => {
  return (
    <div>
      <p>
      <h3><i>1. Salir a correr por 30 minutos </i></h3>
      <div id='imagen7'>
               <img src={image7}  width="500" height="400" />
             </div>
      </p>
      <br/>

      
      <p>
      <h3><i>2. Practicar el ciclismo de Montaña (MTB) </i></h3>
     <div id='imagen8'>
               <img src={image8} width="500" height="400" />
             </div>
     </p>
     <br/>
         <p>
         <h3><i>3. Ver peliculas de Accion </i></h3>
         <div id='imagen9'>
               <img src={image9} width="500" height="400" />
             </div>
         </p>
         <br/>
         <p>
         <h3><i>4. Aprender a Dibujar </i></h3>
      <div id='imagen10'>
               <img src={image10} width="500" height="400" />
             </div>
      </p>
      <br/>
      <p>
      <h3><i>5. Aprender a programar en java </i></h3>
     <div id='imagen11'>
               <img src={image11} width="500" height="400" />
             </div>
     </p>
     <br/>
         <p>
         <h3><i>6. Escurcionar lugares Atractivos </i></h3>
         <div id='imagen12'>
               <img src={image12} width="500" height="400" />
             </div>
         </p>

         <h4>Telefono:</h4>
    <h5>+52 9631050739</h5>
    </div>
  

  )
}

export default Acerca
