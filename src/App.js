import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoCadastro = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
    console.log(colaborador)
  }

  return (
    <>
    <Banner/>
    <Formulario aoNovoColaboradorCadastrado={colaborador => aoNovoCadastro(colaborador)} />
    </>
  );
}

export default App;
