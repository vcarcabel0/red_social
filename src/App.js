//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Carta from './componentes/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './componentes/Login';
import { useState } from 'react';

function App(tuki) {
  const [logged, setLogged] = useState(false)

  return (
    <div className="App">
      <main className="container">
        {logged ? <Carta/> : <Login  algo={tuki}/>} 
      </main>
    </div>
  );
}

export default App;
