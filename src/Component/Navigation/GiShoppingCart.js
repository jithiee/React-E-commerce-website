import React, { useContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { context } from "../Context";
import { CDBBtn } from "cdbreact";
import { BsEmojiFrown } from "react-icons/bs";

const GiShoppingCart = () => {
  const { cart, setCart } = useContext(context);

  const removeItem = (id) => {
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
  };
  const addQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, Qty: item.Qty + 1 } : item
      )
    );
  };
  const removeQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, Qty: item.Qty - 1 * (item.Qty > 0 ? 1 : 0) }
          : item
      )
    );
  };

  return (
    <>
      {cart.length > 0 ? (
        cart.map((items) => (
          <div
            className="d-flex  m-1 shadow-lg m-4 "
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 5% 0 5%",
              borderBottom: "2px brown solid",
            }}
          >
            <div style={{ padding: "2%" }}>
              <img style={{ height: "200px" }} src={items.image} alt="fvafds" />
            </div>
            <div>
              <h5 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                {items.ProductName}
              </h5>
            </div>

            <div style={{ cursor: "pointer" }}>
              <FiMinus onClick={() => removeQty(items.id)} />

              <input
                className="mt-4 "
                style={{ textAlign: "center", margin: "20px" }}
                placeholder={items.Qty}
                type="text"
              />
              <FiPlus onClick={() => addQty(items.id)} />
            </div>
            <p className="fw-bold mt-4">$ {items.Qty * items.price}</p>

            <CDBBtn
              style={{ fontSize: "15px", cursor: "pointer" }}
              color="danger"
              circle
              outline
              id={items.id}
              onClick={() => removeItem(items.id)}
            >
              Remove
            </CDBBtn>
            <CDBBtn
              style={{ fontSize: "15px", cursor: "pointer" }}
              color="yellow"
              circle
              outline
              id={items.id}
              onClick={() => removeItem(items.id)}
            >
              Buy
            </CDBBtn>
          </div>
        ))
      ) : (
        <p style={{ fontSize: "100px" }}>
          <BsEmojiFrown />
          <p
            style={{
              fontSize: "40px",
              color: "red",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            {" "}
            Your Cart is Empty . . !
          </p>
        </p>
      )}
    </>
  );
};

export default GiShoppingCart;
