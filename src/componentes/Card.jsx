import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Carta() {
  return ( 
  <Card border='light' className='m-4 shadow-lg carta' style={{ width: '18rem' }}>
    <div className='d-flex card-header'>
      <Card.Img className='rounded-circle m-2'variant="top" src="./media/Tuki.jpg" style={{ width: '2.5rem', height:'2.5rem' }} />
      <Card.Text className='text-center m-1 p-2 text-secondary' >Nombre del pibe</Card.Text>
    </div>
    <Card.Img variant="top" src="./media/descarga.png" />
    <Card.Body className='card-footer'>
      <p className='fs-6 fw-lighter text-end text-black-50'>fecha</p>
      <Card.Text className='m-2 fs-6 text-start'>
        descripcion de la publicacion
      </Card.Text>
    </Card.Body>
    <div className='d-flex m-1 border border-secondary"'>
      <Card.Img className='rounded-circle m-1' variant='top' src="./media/Tuki.jpg" style={{width: '2.5rem', height: '2.5rem'}}></Card.Img>
      <Card.Text className='text-center m-1 p-2 fs-6'>Nombre del pibe x2</Card.Text>
    </div>
    <Card.Text className='m-2 fs-6 text-start'>Comentario asd sadasd asdsadasdasd dasdsad  sadasdasd</Card.Text>
    <p className='text-start m-1 text-black-50 fw-lighter'>tiempo</p>
  </Card>
  )
}

