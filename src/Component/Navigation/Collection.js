import React from 'react'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';



const Collection = () => {

   const navigate = useNavigate()

   const { state } = useContext(context);
  return (
    <>
   <div>
    <div   className=" collimg    " > 
         <p  className='gry   d-flex  fw-bolder  '> New and classic expression of <br/> our timeless signature color</p>
        </div>

          <Container className='pb-5' >

{state.map((item) =>
  <Card className=' ms-2 mt-5 d-inline-block shadow   ' style={{width:"16%",  }}key={item.id}  >
    <Card.Img  className='menadd ' variant="top" style={{cursor:'pointer'}}   onClick={() => navigate(`/viewpdct/${item.id} `)} src={item.image} />
    <Card.Body>
      <Card.Title>{item.ProductName}</Card.Title>
      <Card.Text>${item.price} </Card.Text>
      <Rating />
      {/* <Button variant="primary" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button> */}
      <Button   style={{fontFamily:'cursive'}}   className='btn1  fw-bold    ' variant="outline-dark"   onClick={() => navigate(`/viewpdct/${item.id} `)}   >View product</Button>
    </Card.Body>
  </Card>


)}
</Container>
</div>
    </>
  )
}

export default Collection
