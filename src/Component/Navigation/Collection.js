import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import 'animate.css/animate.min.css';

const Collection = () => {
  const navigate = useNavigate();
  const { state } = useContext(context);

  const bannerImageAnimation = 'animate__fadeIn'; // Change animation effect here

  return (
    <>
      <div className={`collimg animate__animated ${bannerImageAnimation}`}>
        <p className="gry d-flex fw-bolder">New and classic expression of our timeless signature color</p>
      </div>

      <Container className="pb-5">
        <div className="d-flex flex-wrap justify-content-center">
          {state.map((item, index) => (
            <Card
              className={`ms-2 mt-5 shadow animate__animated ${
                index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'
              }`}
              style={{ width: '16%', minWidth: '200px' }}
              key={item.id}
            >
              <Card.Img
                className="menadd"
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

export default Collection;
