import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { context } from './Context';





const HeadBg = () => {
  const navigate = useNavigate()

  const {state }=useContext(context)
  const  datas = state.filter((item)=>(item.Gender === "Newarrawel"))
  // console.log(datas);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/Jove-Cobblerz-Banner.jpg?v=1675669469"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/Design_Crew_Banner_3.jpg?v=1682430597"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/LaBotte-Sentra-Banner_708ee695-dd74-471c-9a76-c8dad1a479e8.jpg?v=1675680398"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <br></br>


      <div

        style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontFamily: 'cursive' }} >

        <Button className='btn1 w-25 fw-bold' variant="outline-dark" onClick={() => navigate('/men')}  >SHOP MEN</Button>{' '}
        <Button className='btn2 w-25 fw-bold' variant="outline-dark" onClick={() => navigate('/women')} >SHOP WOMEN</Button>{' '}
      </div> <br></br>
      <p style={{ fontSize: '50px', fontFamily: 'cursive', fontWeight: 'bold' }}  >New Arrivals</p> <br />

   

  <div>

  <Container className='pb-5 '   >

{datas.map((item) =>
  <Card className='  w-25  mt-5 d-inline-block shadow   ' key={item.id}  >
    <Card.Img  className='men' variant="top"  style={{cursor:'pointer'}} onClick={() => navigate(`/viewpdct/${item.id} `)}  src={item.image} />
    <Card.Body>
      <Card.Title>{item.ProductName}</Card.Title>
      <Card.Text>${item.price} </Card.Text>
      <Button variant="primary" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button>
    </Card.Body>
  </Card>


)}

</Container>
<div className='Container' >
  <img className='w-25 h-25 mb-3 img-fluid ' src='https://images.pexels.com/photos/8933066/pexels-photo-8933066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05' />
  <img className='img-fluid ms-3  w-25 h-25 '  src='https://images.pexels.com/photos/12511453/pexels-photo-12511453.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1' /> <br></br>
   <img className='img-fluid ms-3 w-25 h-25 mb-5 '  src='https://images.pexels.com/photos/12484292/pexels-photo-12484292.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1' />
</div>


</div>






    </>
  )
}

export default HeadBg;

