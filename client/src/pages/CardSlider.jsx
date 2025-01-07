import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const CardSlider = () => {
    const [mydata, setMydata] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        customPaging: (i) => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#808080", // Gray dots
                }}
            />
        ),
        appendDots: (dots) => (
            <div>
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                        maxWidth: "100%",
                        margin: "0 auto",
                        padding: "10px",
                    }}
                >
                    {dots.slice(0, 6)} {/* Show only the first 6 bullets */}
                </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const loadData = () => {
        let api = "http://localhost:8000/product/showproduct";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const addcardData = (id, name, description, category, price, image) => {
        console.log("Product added to cart:", { id, name, description, category, price, image });
    };

    const ans = mydata.map((key) => {
        return (
            <Card
                style={{
                    width: "100%",
                    maxWidth: "280px",
                    margin: "10px auto",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                key={key._id}
            >
                <a href="#" onClick={() => console.log(`Navigate to /prodetail/${key._id}`)}>
                    <Card.Img
                        variant="top"
                        src={key.image}
                        style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                    />
                </a>
                <Card.Body style={{ backgroundColor: "#f5cecd", borderRadius: "0 0 10px 10px" }}>
                    <Card.Title
                        style={{
                            textAlign: "center",
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            color: "#333",
                        }}
                    >
                        {key.name}
                    </Card.Title>
                    <Card.Text style={{ textAlign: "center", color: "#666" }}>RS. {key.price}</Card.Text>
                    <Button
                        style={{
                            width: "100%",
                            color: "black",
                            backgroundColor: "white",
                            border: "1px solid black",
                            fontWeight: "bold",
                        }}
                        onClick={() =>
                            addcardData(
                                key._id,
                                key.name,
                                key.description,
                                key.category,
                                key.price,
                                key.image
                            )
                        }
                    >
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        );
    });

    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    margin: "20px 0",
                    color: "#555",
                    fontSize: "2em",
                    fontWeight: "bold",
                }}
            >
                Product Slider
            </h1>
            <div
                className="carousel-container"
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "20px",
                    borderRadius: "10px",
                    background: "#f9f9f9",
                    overflowX: "auto", // Ensure scrollbars appear for horizontal overflow
                    scrollbarWidth: "thin", // For modern browsers
                    scrollbarColor: "#808080 #f0f0f0", // Thumb and track color for Firefox
                }}
            >
                {/* Custom Scrollbar Styling */}
                <style>
                    {`
                    .carousel-container::-webkit-scrollbar {
                        width: 10px;
                        height: 10px;
                    }
                    .carousel-container::-webkit-scrollbar-track {
                        background: #f0f0f0;
                        border-radius: 10px;
                    }
                    .carousel-container::-webkit-scrollbar-thumb {
                        background: #808080;
                        border-radius: 10px;
                    }
                    .carousel-container::-webkit-scrollbar-thumb:hover {
                        background: #555;
                    }
                    .carousel-container::-webkit-scrollbar-button {
                        background: #808080;
                        width: 10px;
                        height: 10px;
                    }
                    .carousel-container::-webkit-scrollbar-button:hover {
                        background: #555;
                    }
                    `}
                </style>
                <Slider {...settings}>{ans}</Slider>
            </div>
        </>
    );
};

export default CardSlider;
