import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './compents/Navegador/Navbar'
import Contacto from './compents/Paginas/Perfil'
import Galeria from './compents/Paginas/Galeria'
import Acerca from './compents/Paginas/Acerca'
import Inicio from './compents/Paginas/Inicio'
import Facebook from './compents/Paginas/Facebook'
import Correo from './compents/Paginas/Correo'
import GitHub from './compents/Paginas/GitHub'

function App() {
  return (
    <div className="App">

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Inicio/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
        <Route path='/Acerca' element={<Acerca/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
    </Router>    
    
    <Facebook/>
    <Correo/>
    <GitHub/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    </div>





  );

 
}

export default App;
