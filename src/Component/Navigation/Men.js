import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';


const Men = () => {

  const { state } = useContext(context);

  const datas = state.filter((item) => item.Gender === "male")

  const navigate = useNavigate()



  return (
    <>

      <img
        className="d-block w-100"
        src="https://test-redfynd-django-admin.s3.amazonaws.com/media/images/be_effortless_2.jpg"
        alt="First slide"
      />
      <Container className='pb-5 '   >

        {datas.map((item) =>
          <Card className='  w-25  mt-5 d-inline-block shadow   ' key={item.id}  >
            <Card.Img  className='men' variant="top"  style={{cursor:'pointer'}} onClick={() => navigate(`/viewpdct/${item.id} `)}  src={item.image} />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title>
              <Card.Text>${item.price} </Card.Text>
             
              {/* <Button variant="primary" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button> */}
              <Button   style={{fontFamily:'cursive'}}   className='btn1  fw-bold    ' variant="outline-dark"   onClick={() => navigate(`/viewpdct/${item.id} `)}   >View product</Button>
            </Card.Body>
          </Card>


        )}
      </Container>


    </>

  )
}

export default Men
