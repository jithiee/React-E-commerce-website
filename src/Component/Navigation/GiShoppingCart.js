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
    <div
      className="table-responsive"
      style={{
        background: "linear-gradient(45deg, #fff8d9, #fddfdb)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {cart.length > 0 ? (
        <table className="table table-striped  " >
          <thead>
            <tr>
              <th></th>
              <th className="text-center ">Product Name</th>
              <th className="">Quantity</th>
              <th className="text-center">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    style={{ height: "100px" }}
                    src={item.image}
                    alt="fvafds"
                  />
                </td>
                <td className="text-center">{item.ProductName}</td>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <FiMinus onClick={() => removeQty(item.id)} />
                    <input
                      className="form-control text-center ml-2 mr-2"
                      style={{ width: "50px" }}
                      placeholder={item.Qty}
                      type="text"
                      readOnly
                    />
                    <FiPlus onClick={() => addQty(item.id)} />
                  </div>
                </td>
                <td className="text-center">${item.Qty * item.price}</td>
                <td>
                  <div className="d-flex justify-content-end me-5">
                    <CDBBtn
                      style={{ fontSize: "15px", cursor: "pointer", marginTop: '8%',color:'red' }}
                   
                      circle
                      outline
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </CDBBtn>
                    <CDBBtn
                      style={{
                        fontSize: "15px",
                        cursor: "pointer",
                        marginLeft: "10px",
                        backgroundColor: 'yellow',
                        marginTop: '5%'

                      }}
                      color="yellow"
                      circle
                      outline
                      onClick={() => removeItem(item.id)}
                    >
                      Buy
                    </CDBBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <BsEmojiFrown size={100} />
          <p
            style={{
              fontSize: "24px",
              color: "white",
              fontWeight: "bold",
              fontFamily: "serif",
              marginTop: "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",

            }}
          >
            Your Cart is Empty!
          </p>
        </div>
      )}
    </div>
  );
};

export default GiShoppingCart;
