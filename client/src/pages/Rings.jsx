import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../cardSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../images/Rings (1).webp"

const Rings = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = () => {
        let api = "https://ecommercejwellwebsite-4.onrender.com/product/showproductbycategory?category=Rings";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty: 1 }))
    }

    const ans = mydata.map((key) => {
        return (
            <>
               <Card style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
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
        <Card.Text style={{ textAlign: "center", fontSize: "1rem", color: "#555",fontWeight:"700" }}>RS. {key.price}</Card.Text>
        <Button
  style={{
    width: "100%",
    color: "#e6415a",
    backgroundColor: "lightgrey",
    border: "none",
    transition: "background-color 0.3s, color 0.3s",
    fontWeight:700,
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
            </>
        )
    })
    return (
        <>
            <div id='img1' style={{boxSizing:"border-box",paddingRight:"40px",  }}>
                <img src={img1}  style={{width:"100%",margin:"20px",height:"350px" }}/>

            </div>
            <div id='CardCloudImg'>
                {ans}
            </div>
        </>
    )
}
export default Rings;