import "./Formulario.css"
import React, { useState } from 'react'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = ({aoNovoColaboradorCadastrado, times}) => {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  //Funções 
  const aoSalvar = (e) => {
    e.preventDefault()
    aoNovoColaboradorCadastrado([
      nome,
      cargo,
      imagem,
      time
    ])

  }

  return (
    <div>
        <section className="formulario">
        <form onSubmit={aoSalvar}>
                <h2>Preencha dos dados para criar o card do Colaborador</h2>
                <CampoTexto 
                  nome="Nome" 
                  placeholder="Digite seu nome" 
                  valor={nome}
                  aoAlterado={(valor) => {setNome(valor)}}
                />
                <CampoTexto 
                  nome="Cargo" 
                  placeholder="Digite seu cargo" 
                  valor={cargo}
                  aoAlterado={(valor) => { setCargo(valor)}}
                />
                <CampoTexto 
                  nome="Imagem" 
                  placeholder="Endereço da Imagem (URL - GitHub)" 
                  valor={imagem}
                  aoAlterado={(valor) => { setImagem(valor)}}
                />
                <ListaSuspensa 
                  nome="Time" i
                  itens={times}
                  valor={time}
                  placeholder="Escolha seu Time"
                  aoAlterado={valor => setTime(valor)}  
                />
                <Botao texto="Criar Card" />
            </form>
        </section>
    </div>
  )
}

export default Formulario