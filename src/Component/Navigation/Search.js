import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { context } from '../Context';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Search = () => {
  const { state, search } = useContext(context);
  const navigate = useNavigate();

  console.log(search);

  return (
    <div className="search-container">
      <div className="card-container">
        {state
          .filter((val) => {
            if (search.trim() === '') {
              return val;
            } else if (
              val.ProductName.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((item) => (
            <motion.div
              key={item.id}
              className="cart-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(`/viewpdct/${item.id}`)}
            >
              <Card>
                <Card.Img
                  className="men"
                  variant="top"
                  style={{ cursor: 'pointer' }}
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.ProductName}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/viewpdct/${item.id}`)}
                  >
                    View product
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Search;
