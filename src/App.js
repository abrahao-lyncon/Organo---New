import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
},
{
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
},
{
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
},
{
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
},
{
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
}

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoCadastro = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
    console.log(colaborador)
  }

  return (
    <>
    <Banner/>
    <Formulario aoNovoColaboradorCadastrado={colaborador => aoNovoCadastro(colaborador)} />
    <Time nome="Programation"/>
    <Time nome="Front-End"/>
    <Time nome="Data-Science"/>
    </>
  );
}

export default App;
