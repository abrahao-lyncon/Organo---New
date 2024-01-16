import "./ListaSuspensa.css"
import React from 'react'

const ListaSuspensa = ({nome, itens}) => {
  return (
    <div className="campo-texto">
        <label htmlFor={nome}>{nome}</label>
        <select name={nome} id={nome}>
            {itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default ListaSuspensa