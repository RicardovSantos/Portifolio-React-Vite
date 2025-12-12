import React from "react";
import './Tecnologias.css'

const Tecnologias = () => {

  
  return (
    <>
      {/* linque dos icones  */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="container-Tecnologias">
        <h2 className="titulo-tecnologia">Tecnologias</h2>
        <p className="container-icon">
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-java-plain colored"></i>
          <i className="devicon-kotlin-plain colored"></i>
          <i className="devicon-c-plain colored"></i>
          <i className="devicon-react-plain colored"></i>
          <i className="devicon-vite-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-sqlite-plain colored"></i>
        </p>
      </div>


    </>
  );
};

export default Tecnologias;
