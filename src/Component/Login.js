import React, { useContext, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { context } from "./Context";

const Login = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const data = useContext(context);
  const { email, setAuth } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const enterLogin = () => {
    const setPassword = inputRef.current.upassword.value;
    const setEmail = inputRef.current.uemail.value;
    const useremail = email.filter(
      (item) => item.userEmail === setEmail && item.userPassword === setPassword
    );
    if (useremail.length > 0) { 
      setAuth(true);
      alert("you have successfully logged");
      navigate("/");
    } else {
      alert("email and password did not match");
    }
  };

  return (
    <>
      <div
        className="h-auto w-25  d-flex align-content-center  justify-content-center mb-5 mt-5 shadow"
        style={{
          marginLeft: "35%",
          backgroundColor: "#eeeee4",
          borderRadius: "0px",
        }}
      >
        <div className="p-5">
          <Form ref={inputRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fst-italic">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="uemail"
                id="uemail"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fw-bold fst-italic">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="upassword"
                id="upassword"
              />
            </Form.Group>
            <Col xs="auto" className=" fw-bold fst-italic ">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck2"
                label="Remember me"
              />
            </Col>{" "}
            <br></br>
            <Col xs="auto" className="my-1">
              <Button type="submit" onClick={enterLogin}>
                Login
              </Button>{" "}
              <br></br> <br></br>
              <nav>
                <label>
                  Create an account . . . !
                  <Nav.Link
                    className=" "
                    style={{ color: "blue" }}
                    onClick={() => navigate("/singin")}
                  >
                    Sign Up
                  </Nav.Link>
                </label>
              </nav>
            </Col>
          </Form>
        </div>
      </div> 
    </>
  );
};

export default Login;
