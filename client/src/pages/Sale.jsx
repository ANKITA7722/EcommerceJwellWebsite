import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ring1 from "../images/jwell.webp";
import nec from "../images/nec.webp";
// import neck1 from "../images/neck1.avif"
import neck2 from "../images/neck2.avif"
import bangle from "../images/bangle.avif"
import bangle2 from "../images/bangle2.webp"
import earing from "../images/earing.avif"
import earing1 from "../images/earing1.avif"


import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../cardSlice'; 


const Sale = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/product/showproduct";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty:1 }))
    }

    const ans = mydata.map((key) => {
        return (
            <>
              <Card style={{ width: "20rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
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
          
<div id='selans'>
    {ans}
</div>

            <div id='sellingPage'>
                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={nec} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={ring1} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>


                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={neck2} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={neck2} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={bangle} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={bangle2} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={earing1} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={earing} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                
            </div>

        </>
    )
}
export default Sale;