import React, { useContext, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { context } from "./Context";

const Singnin = () => {
  const inputRef = useRef(null);
  const data = useContext(context);
  const { email, setEmail, userDatas, setUserDatas } = data;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const userFirstName = inputRef.current.name.value;
    const userLastName = inputRef.current.Lastname.value;
    const userPassword = inputRef.current.Password.value;
    const userEmail = inputRef.current.email.value;

    setEmail([
      ...email,
      { userFirstName, userLastName, userPassword, userEmail },
    ]);
    navigate("/login");

    const item = {
      id: Date.now(),
      name: userFirstName,
      Lastname: userLastName,
      email: userEmail,
    };
    setUserDatas([...userDatas, item]);
  };
  const onSubmit = (e) => {
    e.prevantDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div
        className=" w-50 d-flex  align-content-center  justify-content-center  mt-1   shadow"
        style={{
          marginLeft: "25%",
          backgroundColor: "#eeeee4",
          borderRadius: "5px",
        }}
      >
        <div className="forming fw-bold p-5 ">
          <Form ref={inputRef} onSubmit={onSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                  name="name"
                  id="name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Lastname"
                  defaultValue=""
                  name="Lastname"
                  id="Lastname"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="Username"
                    id="Username"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold fst-italic">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                name="email"
                id="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fw-bold fst-italic">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="Password"
                id="password"
              />
            </Form.Group>

            <Button type="submit" onClick={handleSubmit}>
              SingUp
            </Button>
            <br></br>
            <nav>
              <label>
                Already have an account . . .?
                <Nav.Link
                  style={{ color: "blue" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Nav.Link>
              </label>
            </nav>
          </Form>
        </div>
      </div>{" "}
      <br></br>
    </>
  );
};

export default Singnin;
