 import LongNeck from "../images/LongNeck.webp"
 import Neck1 from "../images/Neck.webp"
 import Neck2 from "../images/Bangle.webp"
 import Neck3 from "../images/Earring.webp"
 import Neck4 from "../images/Chocker.webp"
 import Neck5 from "../images/Bridle.webp"
 import Neck6 from "../images/Rings.webp"
 
 import a1 from "../images/ancklet.webp"
 import a2 from "../images/armles.webp"
 import a3 from "../images/kamarband.webp"
 import { useNavigate } from "react-router-dom"
 
 
 const Collection=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div id="collection1">
            <a href="#"onClick={()=>{navigate("/LongNecklaces")}}>
            <img src={LongNeck}/>
            </a>
            
        </div>

        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/Necklass")}}>
            <img src={Neck1}/>
            </a>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/bangle")}}>
            <img src={Neck2}/>
            </a>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/earring")}}>
            <img src={Neck3}/>
            </a>
        </div>

        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/ring")}}>
            <img src={Neck6}/>
            </a>
        </div>


        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/choker")}}>
            <img src={Neck4}/>
            </a>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/")}}>
            <img src={Neck5}/>
            </a>
        </div>

        <div id="collection3">
            <img src={a1}/>
            <img src={a2}/>
            <img src={a3}/>
        </div>

       
        </>
    )
 }
 export default Collection;