import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { context } from './Context';
import Rating from './Rating';





const HeadBg = () => {
  const navigate = useNavigate()

  const {state }=useContext(context)
  const  datas = state.filter((item)=>(item.Gender === "Newarrawel"))
  // console.log(datas)



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

        style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontFamily: 'cursive', }} >

        <Button  className='btn1 w-25 fw-bold   ' variant="outline-dark" onClick={() => navigate('/men')}  >SHOP MEN</Button>{' '}
        <Button className='btn2 w-25 fw-bold' variant="outline-dark" onClick={() => navigate('/women')} >SHOP WOMEN</Button>{' '}
      </div> <br></br>
      <p style={{ color:'#F7CA18'  ,fontFamily: 'cursive', fontWeight: 'bold',  fontSize:'2.9rem', textShadow: '1px 1px 0 #fff, 0 0 9px #000' }}  >New Arrivals</p> <br />
    <hr></hr>



      <div className='image-container mt-5'>
  <img  src='https://cdn.shopify.com/s/files/1/2428/5565/files/MG_7914e_1024x1024.jpg?v=1681900598' />
</div>

   
 
  <div>

  <Container className='pb-5 '   >

{datas.map((item) =>

  <Card className='   mt-5 d-inline-block shadow  ' style={{width:'16%',marginLeft:'8px'}} key={item.id}  >
    <Card.Img  className='men' variant="top"  style={{cursor:'pointer'}} onClick={() => navigate(`/viewpdct/${item.id} `)}  src={item.image} />
    <Card.Body>
      <Card.Title>{item.ProductName}</Card.Title>
      <Card.Text>${item.price} </Card.Text>
      <Rating />
      {/* <Button variant="primary" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button> */}
      <Button   style={{fontFamily:'cursive'}}  className='btn1  fw-bold    ' variant="outline-dark" onClick={() => navigate(`/viewpdct/${item.id} `)} >View product</Button>
    </Card.Body>
    
  </Card>
   

)}

</Container>
 <div className='hgadimg '> 
<img src='https://cdn.shopify.com/s/files/1/2428/5565/collections/Frame_2531_1024x1024.png?v=1686572947' />
 <img src='https://cdn.shopify.com/s/files/1/2428/5565/collections/ND_-_New_Website_-_Banner_Image_DF_-_Natural_Rubber_3_625602e1-0564-4d84-9bb9-6af860db8ee1_1024x1024.jpg?v=1686573096' />
 <img className='mb-5' src='https://cdn.shopify.com/s/files/1/2428/5565/collections/r6116_f886a34e-0714-43ee-aa9d-20658629857b_1024x1024_1_1024x1024.png?v=1686572831' />
 </div>

</div>




    </>
  )
}

export default HeadBg;

