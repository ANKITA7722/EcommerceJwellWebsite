import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from "../cardSlice";
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const [mypro, setMyPro] = useState("");
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMyPro(e.target.value);
        let api = `https://ecommercejwellwebsite-4.onrender.com/product/searchproduct/?product=${mypro}`;
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    const addcardData = (id, name, desc, categ, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: desc, category: categ, price: price, image: image, qnty: 1 }))
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

            </>
        )
    })


    return (
        <>
            <center>

                <InputGroup style={{ width: "20%",marginTop:"20px" }}>
                    <InputGroup.Text id="btnGroupAddon"><CiSearch /></InputGroup.Text>
                    <Form.Control
                        type="text"
                        value={mypro} onChange={handleChange}
                        placeholder="Search products"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                    />
                </InputGroup>

            </center >

            <hr />

            <div id="carddata">
                {ans}
            </div>
        </>
    )
}
export default Search;