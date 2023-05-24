import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { context } from "../Context";

const AddProduct = () => {
  const { state, setState } = useContext(context);
  const formRef = useRef(null);

  function addItem(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      ProductName: formRef.current.productName.value,
      price: formRef.current.price.value,
      Gender: formRef.current.Gender.value,
      image: formRef.current.productImage.value,
      Qty: formRef.current.Qty.value,
    };

    setState([...state, item]);
    formRef.current.reset();
  }

  return (
    <>
      <div
        className="bg-black fst-italic fw-bolder  pb-5  "
        style={{ color: "white" }}
      >
        <form ref={formRef} onSubmit={addItem}>
          <h2> Create New Product</h2>
          <div>
            <div>
              <label for="firstName">ProductName </label> <br></br>
              <input
                className="w-25 text-center"
                type="text"
                id="firstName"
                placeholder="productName"
                name="productName"
              />
            </div>
            <div>
              <label for="firstName">ProductImage </label> <br></br>
              <input
                className="w-25 text-center"
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
                type="text"
                id="lastName"
                placeholder="price"
                name="price"
              />
            </div>

            <div>
              <label for="email">Gender</label>
              <br></br>
              <input
              className="w-25 text-center"
              placeholder="Gender"
              id="email"
               name="Gender" />
            </div>
            <div>
              <label for="password">Quantity </label> <br></br>
              <input
              className="w-25 text-center"
              id="password"
              placeholder="Quantity" 
              name="Qty" />
            </div>
          </div>
          <div class="footer">
            {" "}
            <br></br>
            <Button type="submit" class="btn">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
