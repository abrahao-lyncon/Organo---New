import "./Formulario.css"
import React from 'react'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
  return (
    <div>
        <section className="formulario">
            <form>
                <h2>Preencha dos dados para crira o card do Colaborador</h2>
                <CampoTexto nome="Nome" placeholder="Digite seu nome" />
                <CampoTexto nome="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto nome="Imagem" placeholder="Endereço da Imagem" />
            </form>
        </section>
    </div>
  )
}

export default Formulario