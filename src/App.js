//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Carta from './componentes/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './componentes/Login';
import { useState, useEffect } from 'react';
import Header from './componentes/Header';

function App(tuki) {

  const [logged, setLogged] = useState(false)
  useEffect( ()=> setLogged(localStorage.getItem('idUsers') !== null)
  , [localStorage.getItem('idUsers')])

  function borrar(){
    localStorage.removeItem('idUsers')
  }

  return (
    <div className="App">
      <Header />
      <main className="container">
        {logged ?<> <Carta/>
        <form>
        <button className='btn btn-secondary' onClick={borrar}>Cerrar sesion</button>
        </form>
        </> : <Login  algo={tuki}/>} 
      </main>
    </div>
  );
}

export default App;
