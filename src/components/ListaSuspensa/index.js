import "./ListaSuspensa.css"
import React from 'react'

const ListaSuspensa = ({nome, itens, valor, aoAlterado, placeholder}) => {
  return (
    <div className="campo-texto">
        <label htmlFor={nome}>{nome}</label>
      <select name={nome} id={nome} value={valor} onChange={e => aoAlterado(e.target.value)} placeholder={placeholder}>
        <option value=""></option>
            {itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default ListaSuspensa