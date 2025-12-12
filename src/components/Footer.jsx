import React from "react";
import './Footer.css'
const Footer = () => {

    return (
        <>
        <footer>
            <h2>Contatos</h2>
            <p>Ricardo Vieira dos Santos &copy; 2025</p>
            <p>Redes Sociais:</p>
            <p className="icons-rodape">
         <a className="item-rodape" target="_blank" href="https://github.com/RicardovSantos"><i className="devicon-github-plain colored" id="icon-sociais"></i></a>
         <a className="item-rodape" target="_blank" href="https://www.instagram.com/ricardo.vsr?igsh=eXZxdTdta285bmo%3D&utm_source=qr"><ion-icon  id="icon-sociais" name="logo-instagram"></ion-icon></a>
         <a className="item-rodape" target="_blank" href="https://www.linkedin.com/in/ricardo-santos-0ba84b384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i  id="icon-sociais" className="devicon-linkedin-plain colored"></i></a>    
            </p>
        
               
        <p><strong>Cidade:</strong>São Paulo - SP</p>
        <p><strong>Telefone:</strong><a className="item-rodape" href="https://wa.me/${5511960948053}?text=${olá}">+55 (11) 96094-8053</a></p>
        <p><strong>E-mail Principal:</strong><a className="item-rodape" href="mailto:ricardovieirads@outlook.com">ricardovieirads@outlook.com</a></p>

        <script src=" https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js "></script>
        
        </footer>
        </>


    )


}

export default Footer