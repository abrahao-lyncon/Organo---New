import "./Formulario.css"
import React from 'react'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX & UI',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <div>
        <section className="formulario">
            <form>
                <h2>Preencha dos dados para criar o card do Colaborador</h2>
                <CampoTexto nome="Nome" placeholder="Digite seu nome" />
                <CampoTexto nome="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto nome="Imagem" placeholder="Endereço da Imagem" />
                <ListaSuspensa nome="Time" itens={times}  />
            </form>
        </section>
    </div>
  )
}

export default Formulario