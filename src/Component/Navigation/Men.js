import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import 'animate.css/animate.min.css';

const Men = () => {
  const { state } = useContext(context);
  const datas = state.filter((item) => item.Gender === 'male');
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const bannerImageAnimation = 'animate__zoomIn'; // Change animation effect here

  return (
    <>
      <img
        className={`d-block w-100 animate__animated ${bannerImageAnimation}`}
        src="https://test-redfynd-django-admin.s3.amazonaws.com/media/images/be_effortless_2.jpg"
        alt="First slide"
      />
      <Container className="pb-5">
        <div className="d-flex flex-wrap justify-content-center">
          {datas.map((item, index) => (
            <Card
              className={`ms-2 mt-5 shadow animate__animated ${
                index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'
              }`}
              style={{
                width: '16%',
                minWidth: '200px',
                transition: 'transform 0.3s',
                transform: hoveredItem === index ? 'scale(1.05)' : 'scale(1)',
              }}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                className="men"
                variant="top"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/viewpdct/${item.id}`)}
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.ProductName}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Rating />
                <Button
                  className="btn1 fw-bold"
                  variant="outline-dark"
                  onClick={() => navigate(`/viewpdct/${item.id}`)}
                >
                  View product
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Men;
