import "./CampoTexto.css"

const CampoTexto = ({nome, placeholder, aoAlterado, valor}) => {

  const aoDigitado = (e) => {
    aoAlterado(e.target.value)
  }

  return (
    <div className="campo-texto">
    <label htmlFor={nome}>{nome}</label>
    <input value={valor} onChange={aoDigitado} type="text" name={nome} id={nome} placeholder={placeholder} />
    </div>
  )
}

export default CampoTexto