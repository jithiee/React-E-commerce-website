
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';

const Women = () => {

  const  {state} =  useContext(context);
  
 const datas = state.filter((item)=> item.Gender === "female")
 const navigator = useNavigate()

  return (
    <>
     <img
          className="d-block w-100"
          src="https://test-redfynd-django-admin.s3.amazonaws.com/media/images/be_effortless.jpg"
          alt="dfe"
        />


<Container  className='pb-5'>
   
   {datas.map((item)=> 
    <Card  className=' ms-2 mt-5 d-inline-block shadow   ' style={{width:"16%",  }} key={item.id}  >
       <Card.Img  className='menadd '  variant="top" style={{cursor:'pointer'}} onClick={()=>navigator(`/viewpdct/${item.id}`)}  src={item.image} />
       <Card.Body>
         <Card.Title>{item.ProductName}</Card.Title>
         <Card.Text>${item.price} </Card.Text>
         {/* <Button variant="primary" onClick={()=>navigator(`/viewpdct/${item.id}`)} >View product </Button> */}
         <Button  style={{fontFamily:'cursive'}}  className='btn1  fw-bold    ' variant="outline-dark"  onClick={()=>navigator(`/viewpdct/${item.id}`)} >View product</Button>
       </Card.Body>
     </Card>
 
   
     ) }
      </Container>
    </>
  )
}

export default Women
