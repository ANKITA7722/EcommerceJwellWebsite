import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec, itemRemove } from "../cardSlice";
import { useNavigate } from "react-router-dom";
import "../css/cartSlyce.css"; // Import CSS

const Cart = () => {
  const MyCard = useSelector((state) => state.mycard.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qtyIncrement = (id) => {
    dispatch(qntyInc({ id: id }));
  };

  const qtyDecrement = (id) => {
    dispatch(qntyDec({ id: id }));
  };

  const removeItem = (id) => {
    dispatch(itemRemove({ id: id }));
  };

  let totalAmount = 0;

  const Data = MyCard.map((key, index) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr key={key.id} className="table-row">
        <td>{index + 1}</td>
        <td>
          <img src={key.image} alt={key.name} width="100" height="100" />
        </td>
        <td style={{color:"#e6415a"}}>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td  style={{color:"#e6415a"}}>{key.price}</td>
        <td>
          <div className="quantity-controls">
            <button
              className="qty-button"
              onClick={() => qtyDecrement(key.id)}
            >
              <FaCircleMinus />
            </button>
            <span className="quantity">{key.qnty}</span>
            <button
              className="qty-button"
              onClick={() => qtyIncrement(key.id)}
            >
              <FaPlusCircle />
            </button>
          </div>
        </td>
        <td>{key.price * key.qnty}</td>
        <td>
          <button className="action-button" onClick={() => removeItem(key.id)}>
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover className="interactive-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data}
          <tr>
            <td colSpan="5"></td>
            <td style={{ fontWeight: "bold" }}>Total Amount:</td>
            <td>{totalAmount}</td>
            <td colSpan="2">
              <button className="checkout-button" onClick={() => navigate("/checkout")}>
                CheckOut
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
