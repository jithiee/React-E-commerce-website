import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { context } from "../Context";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";


const AdminEditdele = () => {
  const { state, setState } = useContext(context);

  const onDelete = (id) => {
    const filteredDeleter = state.filter((delt) => delt.id !== id);
    setState(filteredDeleter);
    alert("conform delete");

  };

  return (
    <>
      <div
        className="bg-black d-flex pb-5  g-3 "
      
      >
        <Container>
          {state.map((item) => (
            <Card
              className="  w-25  mt-5 d-inline-block shadow  "
              key={item.id}
            >
              <Card.Img className="menadd " variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.ProductName}</Card.Title>
                <Card.Text>${item.price} </Card.Text>
                <div>
                  <Button
                    className="bg-danger"
                    variant="primary"
                    onClick={() => onDelete(item.id)}
                  >
                    DELETE
                  </Button>
                  <NavLink
                    exact
                    to= {`/admin/edit/${item.id}`}
                    activeClassName="activeClicked"
                  >
                    <Button className="bg-info" variant="primary">
                      EDITING{" "}
                    </Button>
                  </NavLink>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
};

export default AdminEditdele;
