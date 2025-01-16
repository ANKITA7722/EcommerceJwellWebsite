import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const Topmenu = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mycard = useSelector(state => state.mycard.cart);
    console.log(mycard);

    const cartPage = () => {
        navigate("/cart");
    }


    const handleSubmit = () => {
        const api = "http://localhost:8000/adminuser/usercheck";
        axios.post(api, { user: username, password: password }).then((res) => {
            console.log(res);

            if (res.status === 200) {
                message.success("You have successfully logged in");
                navigate("/admin");
            } else {
                message.error(res.data.msg);
            }
        }).catch((err) => {
            message.error("An error occurred. Please try again.");
        });
    };

    const cartLen = mycard.length;
    return (
        <>
            <div id="topmenu"  >
                <span id="carticon">{cartLen}</span>
                <a href="#" onClick={cartPage}>
                    <TiShoppingCart id="icon" style={{color:"black"}}/>
                </a>


                <a href="#" onClick={handleShow}>
                    <FaUserCircle id="icon" style={{color:"black"}}/>
                </a>
            </div>

            <Modal show={show} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Area for Managing Website</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                         Enter Admin: <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <br />
                    <div> 
                        Enter Password: <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Topmenu;
