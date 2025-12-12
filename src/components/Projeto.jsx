import React from 'react'
import ImgProjetoUm from '../assets/eletro-santos.jpg'
import ImgProjetoDois from '../assets/patinhasCarentes.png'
import './Projeto.css'


const Projeto = () => {

  return (
    <>
    <section className='secao-body-projetos'>
        <h2 className="projetos-titulo">Meus Projetos</h2>
         <div className='caixa-cards'>

         <article className='card'>
            <img src={ImgProjetoDois} className='img-pojet' alt="patinhas carentes" />
            <div className='caixa-textos'>
            <p className='Paragrafo-projeto'>Este projeto foi construído utilizando tecnologias modernas para garantir uma experiência rápida, segura e agradável para os usuários. 
A <i>Patinhas Carentes</i> é uma organização sem fins lucrativos dedicada a resgatar, reabilitar e encontrar lares amorosos para cães e gatos em situação de rua.</p>
            <h3 className='titulo-card'>Patinhas Carentes</h3>
            </div>
        </article>
         <article className='card'>
            <img src={ImgProjetoUm} className='img-pojet' alt="patinhas carentes" />
            <div className='caixa-textos'>
            <p className='Paragrafo-projeto'>projeto de Modelagem de Banco de Dados para uma loja de e-commerce e varejo, a <i>Eletro Santos.</i>

Este Diagrama Entidade-Relacionamento (DER) representa a arquitetura de dados necessária para sustentar todas as operações essenciais de um sistema de vendas online bem robusta.</p>
            <h3 className='titulo-card'>Eletro Santos</h3>
            </div>
        </article>
         <article className='card'>
            <img src={ImgProjetoUm} className='img-pojet' alt="patinhas carentes" />
            <div className='caixa-textos'>
            <p className='Paragrafo-projeto'>Este projeto foi construído utilizando tecnologias modernas para garantir uma experiência rápida, segura e agradável para os usuários. 
A <i>Patinhas Carentes</i> é uma organização sem fins lucrativos dedicada a resgatar, reabilitar e encontrar lares amorosos para cães e gatos em situação de rua.</p>
            <h3 className='titulo-card'>Patinhas Carentes</h3>
            </div>
        </article>
        </div>
    </section>
    </>
  )
}

export default Projeto