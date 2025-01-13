import Carousel from 'react-bootstrap/Carousel';
import first from "../images/Artboard1.webp";
import second from "../images/Artboard.webp";
import third from "../images/third.webp";

import ReactPlayer from 'react-player'
import vedio from "../images/bde.mp4"
import vedio1 from "../images/Bidv.mp4"
import vedio2 from "../images/BIPM.mp4"
import vedio3 from "../images/Bridal.mp4"


import nec from "../images/earing.webp";
import choker from "../images/Set.webp";
import c1 from "../images/ArtboardRing.webp";
import c2 from "../images/Pandent.webp";
import c3 from "../images/shopping.webp";
import c4 from "../images/Mangalsutra.webp";
import c5 from "../images/mangtika.jpg";

// import collegcol from "../images/collegecollection.webp";

import g1 from "../images/g2.webp"
import g2 from "../images/g4.avif"
import g3 from "../images/g3.webp"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import g4 from "../images/slide2.webp"

import ring1 from "../images/jwell.webp";
import neck from "../images/nec.webp";
// import neck1 from "../images/neck1.avif"
import neck2 from "../images/neck2.avif"
import bangle from "../images/bangle.avif"
import bangle2 from "../images/bangle2.webp"
import earing from "../images/earing.avif"
import earing1 from "../images/earing1.avif"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../cardSlice';

//=================================
import floral from "../images/collection_copy_2_f41829bf-2aff-48e8-ba83-d2dadeea7fdf.webp";
import floral2 from "../images/collection_copy_3.webp";
import floral3 from "../images/collection_copy_3ede784a-6742-468a-81fa-ba2c0ab9154f.webp";
import floral4 from "../images/collection_copy_4.webp";
import icon from "../images/icon.webp"
import { useNavigate } from 'react-router-dom';

// ==================================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/style.css";


const Home = () => {

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
                    backgroundColor: "#000",
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
                        maxWidth: "300px",
                        margin: "0 auto",
                    }}
                >
                    {dots.slice(0, 6)} 
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

    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/product/showproduct";
        axios.get(api).then((res) => {
            setMydata(res.data);
           // console.log(res.data);
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
            {/* carousel section............................................................ */}
            <div id="Home">

                <Carousel >

                    {/* <Carousel.Item height="500px" width="100%" style={{display:"flex",color:"white"}}>
                    <ReactPlayer controls={true} url={vedio3} loop={true} playing={true} muted={true}/>
                    <div className='textarea'>
                         <h1>best brands for trininka</h1>
                         <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est laboriosam voluptate, facilis ipsum provident ipsa natus ipsam ex nostrum sequi </h6>
                         <Button>Shop Now</Button>
                    </div>
                    </Carousel.Item> */}

                    <Carousel.Item>
                        <img src={second} height="500px" width="100%" />

                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={first} height="500px" width="100%" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={third} height="500px" width="100%" />

                    </Carousel.Item>
                </Carousel>
                {/* icon ................................................................................... */}
            </div>
            <div id='Home2'>
                <img src={icon} />
            </div>
            {/* New ariival................................................................................... */}
            <div id='CardSection'>
                <div id="NewArival" ><h3>NEW ARIVAL</h3>
                    <p>Explore New Style of the Season</p>
                </div>

                {/* output......................................................................................... */}

                <div className="carousel-container" style={{ width: '100%', padding: '20px' }}>
                    <Slider {...settings}>
                        {ans}
                    </Slider>
                </div>

                {/*  .............................................................................................. */}
                <div id='sellingPage'>

                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={ring1} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}> Dangler Earrings</Card.Text>
                                <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", fontWeight: "700" }}>rs 299</p>
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
                            
                        >
                            Add to Card
                        </Button>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}> Mio Necklace</Card.Text>
                                <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", fontWeight: "700" }}>rs 8000</p>
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
                            
                        >
                            Add to Card
                        </Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={bangle} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={bangle2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}>Bangles & Bracelet </Card.Text>
                                <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", fontWeight: "700" }}>rs 3200</p>
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
                            
                        >
                            Add to Card
                        </Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={earing1} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={earing} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}>Jhumka Earrings</Card.Text>
                                <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", fontWeight: "700" }}>rs 2200</p>
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
                            
                        >
                            Add to Card
                        </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>

            {/* vedios =================== */}

            <div id='vedioplayer' >
                <ReactPlayer controls={true} url={vedio} loop={true} playing={true} muted={true} />
                <ReactPlayer controls={true} url={vedio1} loop={true} playing={true} muted={true} />
                <ReactPlayer controls={true} url={vedio2} loop={true} playing={true} muted={true} />
            </div>



            <div id='Home3'>
                <div>
                    <img src={nec} onClick={() => { navigate("/Earring")}}/>
                    <h5>Earring </h5>
                </div>
                <div>
                    <img src={choker} onClick={() => { navigate("/Necklass")}}/>
                    <h5>Necklaces </h5>
                </div>
                <div>
                    <img src={c1} onClick={() => { navigate("/ring")}}/>
                    <h5>Rings</h5>
                </div>
                <div>
                    <img src={c2} onClick={() => { navigate("/Pendant")}}/>
                    <h5>Pendant</h5>
                </div>

                <div>
                    <img src={c3} onClick={() => { navigate("/bangle")}}/>
                    <h5>Bangles</h5>
                </div>

                <div>
                    <img src={c4} onClick={() => { navigate("/Mangalsutra")}}/>
                    <h5>Mangalsutra</h5>
                </div>

                <div>
                    <img src={c5}  onClick={() => { navigate("/mangtika")}}/>
                    <h5>Maangtika</h5>
                </div>

            </div>

            {/* ---------------------------------------------------- */}
            <div id='home4'>
                <div className='d1'>
                    <Button variant="primary" style={{ backgroundColor: "black", border: "none", padding: "10px", width: "10%", color: "white" }}
                        onClick={() => { navigate("/sale") }}>View All</Button>
                    <h2>-  Populler Collection   -</h2></div>

                <Card style={{ width: '23rem',marginLeft:"100px" }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem', height: '300px' }}>
                    <Card.Img variant="top" src={g1} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Vication Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g3} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Nakshtra Collection</Card.Title>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card.Img variant="top" src={g4} style={{ marginTop: '20px', marginBottom: '20px' }} />
            </div>
            {/* =================================================================================== */}
            <div id='home5'>
                <div className='head3'>
                    <h2> Trending Style</h2>
                </div>
                <hr />
                <Card style={{ width: '18rem', height: "300px" }} >
                    <Card.Img variant="top" src={floral} onClick={() => { navigate("/Pendant")}}/>
                </Card>

                <Card style={{ width: '18rem', height: "300px" }}>
                    <Card.Img variant="top" src={floral2} onClick={() => { navigate("/Pendant")}}/>
                </Card>

                <Card style={{ width: '18rem', height: "250px" }}>
                    <Card.Img variant="top" src={floral3} onClick={() => { navigate("/Necklass")}} />
                </Card>

                <Card style={{ width: '18rem', height: "250px" }}>
                    <Card.Img variant="top" src={floral4} onClick={() => { navigate("/Necklass")}}/>
                </Card>
            </div>


        </>
    )
}
export default Home;