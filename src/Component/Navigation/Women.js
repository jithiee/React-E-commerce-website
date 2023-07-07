import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';

const Women = () => {
  const { state } = useContext(context);
  const datas = state.filter((item) => item.Gender === 'female');
  const navigator = useNavigate();

  return (
    <>
      <img
        className="d-block w-100"
        src="https://test-redfynd-django-admin.s3.amazonaws.com/media/images/be_effortless.jpg"
        alt="dfe"
      />

      <Container className="pb-5">
        <div className="d-flex flex-wrap justify-content-center">
          {datas.map((item) => (
            <Card className="ms-2 mt-5 shadow" style={{ width: '16%', minWidth: '200px' }} key={item.id}>
              <Card.Img
                className="menadd"
                variant="top"
                style={{ cursor: 'pointer' }}
                onClick={() => navigator(`/viewpdct/${item.id}`)}
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.ProductName}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Rating />
                <Button
                  className="btn1 fw-bold"
                  variant="outline-dark"
                  onClick={() => navigator(`/viewpdct/${item.id}`)}
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

export default Women;
