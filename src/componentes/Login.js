import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export default function Login() {
    const [tuki, setTuki] = useState({
        email:"",
        contraseña:""
    })
    function inputCambio (event) {
        setTuki ({
            ...tuki,[event.target.name] : event.target.value
        })
        console.log(event.target.value)
        event.preventDefault();
    }

    function guardar(event){
      setTuki({
        ...tuki,
        [event.target.name] : event.target.value
      })
      console.log(event.target.value)
      event.preventDefault();
    }

  return (
    <Form className='m-5 p-5' onSubmit={guardar}>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su Email" name="email" value={tuki.email} onChange={inputCambio}/>
        </Form.Group>

         <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" name="contraseña" value={tuki.contraseña} onChange={inputCambio}/>
            <Form.Text className="text-muted">
            No compartas tus contraseñas con terceros 
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Iniciar
        </Button>
    </Form>
  )
}
