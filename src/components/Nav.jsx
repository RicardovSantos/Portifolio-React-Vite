import React from "react"
import './Nav.css'
import Sobre from './Sobre'
const Nav = () => {

    return (
      <nav className="container-nav">
        <ul >
          <li><a href="#Header">Inicio</a></li>
          <li><a href='#'>Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    );
}

export default Nav