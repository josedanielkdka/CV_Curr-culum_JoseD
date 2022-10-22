import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-red">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h3>Jose Daniel Dominguez Perez</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
      <li className="nav-item">
          <Link className="nav-link" to='/Contacto' ><h4>PERFIL</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/'><h4>DOMICILIO</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Galeria'><h4>FORMACIÓN ACADÉMICA</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Acerca'><h4>HOBBIES</h4></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar




