import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImUser } from "react-icons/im";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { CDBBtn } from "cdbreact";
import { MdAdminPanelSettings } from "react-icons/md";
import { context } from "../Context";

const NavBars = () => {
  const navigate = useNavigate();
  const { setSearch } = useContext(context);

  const SearchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());

    navigate("/search");
  };

  return (
    <>
      <div className="navbaar   mt-3" style={{ position: "sticky" }}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              className="icon fw-bold fs-2   "
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              PLASHOE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link onClick={() => navigate("/men")}>MEN</Nav.Link>
                <Nav.Link onClick={() => navigate("/women")}>WOMEN</Nav.Link>
                <Nav.Link onClick={() => navigate("/collection")}>COLLECTION</Nav.Link>
              </Nav>

              <Nav style={{ display: "flex", gap: "30px" }}>
                <Form className="d-flex  p-4 ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={SearchHandler}
                  />

                  <NavLink exact to="/search">
                    {" "}
                    <Button variant="outline-dark">Search</Button>
                  </NavLink>
                </Form>
              </Nav>

              <div style={{ display: "flex", gap: "20px" }}>
                <Nav.Link
                  className="cart  fs-2 "
                  onClick={() => navigate("/cart")}
                >
                  <GiShoppingCart />
                </Nav.Link>

                <Nav.Link
                  className="user fs-2 ms-3"
                  onClick={() => navigate("/imuser")}
                >
                  <ImUser />
                </Nav.Link>
              </div>
              <div className="d-flex mt-2 " style={{ gap: "10px" }}>
                <CDBBtn
                  className="ms-3"
                  color="primary"
                  onClick={() => navigate("/singin")}
                >
                  SignUp
                </CDBBtn>
                <CDBBtn color="primary" onClick={() => navigate("/")}>
                  LogOut
                </CDBBtn>
                <Nav.Link
                  className="fs-3 "
                  style={{ gap: "10px" }}
                  onClick={() => navigate("/admin/adminEdit")}
                >
                  <MdAdminPanelSettings />
                </Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBars;