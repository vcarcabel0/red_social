//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Carta from './componentes/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './componentes/Login';
import { useState, useEffect } from 'react';

function App(tuki) {
  const [logged, setLogged] = useState(false)
  useEffect( ()=> setLogged(localStorage.getItem('idUsers') !== null)
  , [localStorage.getItem('idUsers')])

  function borrar(){
    localStorage.removeItem('idUsers')
  }

  return (
    <div className="App">
      <main className="container">
        {logged ? <><Carta/>
        <form>
        <button onClick={borrar}>Cerrar sesion</button>
        </form>

                  </> : <Login  algo={tuki}/>} 
      </main>
    </div>
  );
}

export default App;
