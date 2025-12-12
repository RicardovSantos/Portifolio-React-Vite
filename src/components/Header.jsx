import React from "react";
// importar imagem (../)
import Foto from '../assets/perfil.jpg'
import './Header.css'


const Header = () => {

return (
      
        <header className="container-header"> 
            <div className="container-foto">
                <img src={Foto} id="foto-perfil" alt="Foto de perfil" />
            </div>

            <h1>Ricardo Vieira dos Santos</h1>
        </header>
)

}

export default Header