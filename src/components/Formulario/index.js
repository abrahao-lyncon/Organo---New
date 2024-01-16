import "./Formulario.css"
import React from 'react'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/Botao";

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
                <CampoTexto nome="Imagem" placeholder="Endereço da Imagem (URL - GitHub)" />
                <ListaSuspensa nome="Time" itens={times}  />
                <Botao texto="Mame" />
            </form>
        </section>
    </div>
  )
}

export default Formulario