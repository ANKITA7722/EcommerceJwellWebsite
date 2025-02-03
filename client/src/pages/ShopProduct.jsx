import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../cardSlice";
import "../css/ShopPro.css"; // Link to the CSS file

const ShopProduct = () => {
  const [input, setInput] = useState({});
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = "https://ecommercejwellwebsite-4.onrender.com/product/shopproduct";
    axios.post(api, input).then((res) => {
      setMydata(res.data);
    });
  };

  const addcardData = (id, name, desc, categ, price, image) => {
    dispatch(addToCart({ id, name, description: desc, category: categ, price, image, qnty: 1 }));
  };

  const ans = mydata.map((key) => {
    return (
      <Card style={{ width: "15rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
      <a href="#" onClick={() => navigate(`/prodetail/${key._id}`)}>
          <Card.Img
              variant="top"
              src={key.image}
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
      </a>

      <Card.Body style={{ backgroundColor: "white", padding: "20px" }}>
          <Card.Title style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}>{key.name}</Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "1rem", color: "#555", fontWeight: "700" }}>RS. {key.price}</Card.Text>
          <Button
              style={{
                  width: "100%",
                  color: "#e6415a",
                  backgroundColor: "lightgrey",
                  border: "none",
                  transition: "background-color 0.3s, color 0.3s",
                  fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.backgroundColor = "black";
              }}
              onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#e6415a";
                  e.currentTarget.style.backgroundColor = "white";
              }}
              onClick={() => addcardData(key._id, key.name, key.description, key.category, key.price, key.image)}
          >
              Add to Card
          </Button>

      </Card.Body>
  </Card>
    );
  });

  return (
    <div className="shop-container">
      <div className="filter-section">
        
        <h4 style={{color:"#e6415a", fontWeight:"500",textTransform:"uppercase", }}>Set Your Pattern</h4>
        <label>
          Low Price:
          <input type="text" name="lprice" value={input.lprice || ''} onChange={handleInput} />
        </label>
        <label>
          High Price:
          <input type="text" name="hprice" value={input.hprice || ''} onChange={handleInput} />
        </label>
        <h4 style={{color:"#e6415a", fontWeight:"500",textTransform:"uppercase", }}>Shop by Category</h4>
        <label>
          <input type="checkbox" value="Bangles" name="Bangles" onChange={handleInput} /> Bangles
        </label>
        <label>
          <input type="checkbox" value="Choker" name="Choker" onChange={handleInput} /> Choker
        </label>
        <label>
          <input type="checkbox" value="Earring" name="Earring" onChange={handleInput} /> Earring
        </label>
        <label>
          <input type="checkbox" value="LongNecklaces" name="LongNecklaces" onChange={handleInput} />LongNecklaces
        </label>
        <label>
          <input type="checkbox" value="Mangalsutra" name="Mangalsutra" onChange={handleInput} /> Mangalsutra
        </label>
        <label>
          <input type="checkbox" value="Pendant" name="Pendant" onChange={handleInput} /> Pendant
        </label>
        <label>
          <input type="checkbox" value="Necklass" name="Necklass" onChange={handleInput} /> Necklass
        </label>
        <Button className="hover-button" onClick={handleSubmit}>Show Result</Button>
      </div>
      <div className="products-section">
        {ans}
      </div>
    </div>
  );
};

export default ShopProduct;
