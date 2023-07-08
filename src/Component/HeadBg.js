import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { context } from './Context';
import Rating from './Rating';
import 'animate.css/animate.min.css';

const HeadBg = () => {
  const navigate = useNavigate();
  const { state } = useContext(context);
  const datas = state.filter((item) => item.Gender === 'Newarrawel');

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/Jove-Cobblerz-Banner.jpg?v=1675669469" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/Design_Crew_Banner_3.jpg?v=1682430597" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0533/3391/7885/files/LaBotte-Sentra-Banner_708ee695-dd74-471c-9a76-c8dad1a479e8.jpg?v=1675680398" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <br />

      <div className="animate__animated animate__fadeIn" style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontFamily: 'cursive' }}>
        <Button className="btn1 w-25 fw-bold animate__animated animate__fadeInLeft" variant="outline-dark" onClick={() => navigate('/men')}>
          SHOP MEN
        </Button>
        <Button className="btn2 w-25 fw-bold animate__animated animate__fadeInRight" variant="outline-dark" onClick={() => navigate('/women')}>
          SHOP WOMEN
        </Button>
      </div>
      <br />
      <p className="animate__animated animate__fadeIn" style={{ color: '#F7CA18', fontFamily: 'cursive', fontWeight: 'bold', fontSize: '2.9rem', textShadow: '1px 1px 0 #fff, 0 0 9px #000' }}>
        New Arrivals
      </p>
      <br />
      <hr />

      <div className="image-container mt-5 animate__animated animate__fadeIn">
        <img src="https://cdn.shopify.com/s/files/1/2428/5565/files/MG_7914e_1024x1024.jpg?v=1681900598" alt="New Arrivals" />
      </div>

      <Container className="pb-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {datas.map((item) => (
            <Card className="mt-5 me-3 shadow animate__animated animate__fadeIn" style={{ width: '16%', minWidth: '250px' }} key={item.id}>
              <Card.Img className="men" variant="top" style={{ cursor: 'pointer' }} onClick={() => navigate(`/viewpdct/${item.id}`)} src={item.image} />
              <Card.Body>
                <Card.Title>{item.ProductName}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Rating />
                <Button className="btn1 fw-bold" variant="outline-dark" onClick={() => navigate(`/viewpdct/${item.id}`)}>
                  View product
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      <div className="hgadimg animate__animated animate__fadeIn">
        <img src="https://cdn.shopify.com/s/files/1/2428/5565/collections/Frame_2531_1024x1024.png?v=1686572947" alt="Image 1" />
        <img src="https://cdn.shopify.com/s/files/1/2428/5565/collections/ND_-_New_Website_-_Banner_Image_DF_-_Natural_Rubber_3_625602e1-0564-4d84-9bb9-6af860db8ee1_1024x1024.jpg?v=1686573096" alt="Image 2" />
        <img className="mb-5" src="https://cdn.shopify.com/s/files/1/2428/5565/collections/r6116_f886a34e-0714-43ee-aa9d-20658629857b_1024x1024_1_1024x1024.png?v=1686572831" alt="Image 3" />
      </div>
    </>
  );
};

export default HeadBg;
