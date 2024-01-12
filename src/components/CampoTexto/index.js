import "./CampoTexto.css"
import React from 'react'

const CampoTexto = ({nome, placeholder}) => {
  return (
    <div className="campo-texto">
    <label htmlFor={nome}>{nome}</label>
    <input type="text" name={nome} id={nome} placeholder={placeholder} />
    </div>
  )
}

export default CampoTexto