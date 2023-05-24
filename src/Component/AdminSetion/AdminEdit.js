import { useContext, useState } from "react";
import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { context } from "../Context";

const AdminEdit = () => {
  const navigate = useNavigate();

  const { state } = useContext(context);

  const { id } = useParams();

  const newPdrt = state.filter((item) => item.id === parseInt(id));
  const [edit, setEdit] = useState(newPdrt[0]);

  const editHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEdit((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const confirmEdit = (id) => {
    const itemIndex = state.findIndex((item) => item.id === id);

    state[itemIndex] = edit;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/edit");
  };
  console.log(newPdrt);

  return (
    <div>
      <div
        className="p-5   "
        style={{ backgroundColor: "black", color: "white"  }}
      >
        <h1   className="fw-bolder fst-italic"> Edit Product</h1> <br></br>
        <form  onSubmit={handleSubmit} >
          <div className="form-body">
            <div>
              <label   for="firstName">Product Name </label> <br></br>
              <input className="w-25  text-center"
                value={edit.ProductName}
                onChange={editHandler}
                type="text"
                id="firstName"
                placeholder="productName"
                name="ProductName"
              />
            </div>
            <div>
              <label for="firstName">Product Image </label> <br></br>
              <input 
              className="w-25 text-center"
                value={edit.image}
                onChange={editHandler}
                type="text"
                id="lastName"
                placeholder="productImage"
                name="productImage"
              />
            </div>
            <div>
              <label for="firstName">Price </label> <br></br>
              <input
              className="w-25 text-center"
                value={edit.price}
                onChange={editHandler}
                type="text"
                id="lastName"
                placeholder="price"
                name="price"
              />
            </div>

            <div>
              <label for="email">Gender </label> <br></br>
              <input
              className="w-25 text-center"
                id="email"
                value={edit.Gender}
                onChange={editHandler}
                name="type"
              />
            </div>
            <div>
              <label for="password">Quantity </label> <br></br>
              <input
              className="w-25  text-center"
                value={edit.Qty}
                onChange={editHandler}
                id="password"
                name="quatity"
              />
            </div>
          </div>
          <div>
            <NavLink exact to="/admin/adminEdit">
              {" "}
              <br></br>
              <Button type="submit" onClick={confirmEdit(edit.id)} class="btn">
                Change Product
              </Button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEdit;
