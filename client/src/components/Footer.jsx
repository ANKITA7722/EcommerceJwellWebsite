import { TbPhoneCalling } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <>
      <div id="Footer">
        <div>
          <h3>Customer Service</h3>
          <p>Where's My Order?</p>
          <p>Returns & Exchanges</p>
          <p>Contact Us</p>
          <p>Tarinika Rewards</p>

        </div>
        <div>
          <h3>Information</h3>
          <p>Shipping & Delivery</p>
          <p>Warranty Information</p>
          <p>Jewelry Care & Repairs</p>
          <p>FAQs</p>
          <p>Blogs</p>
          

        </div>
        <div>
          <h3>Company</h3>
          <p> Our Story</p>
          <p>Terms of Service</p>
          <p>Retail Stores</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
          

        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Where's My Order?</p>
          <p>wattsapp</p>
          <p><TbPhoneCalling style={{fontSize:"25px"}}/>7722843205</p>
          <p><CgMail style={{fontSize:"25px"}}/>bobdeankita24@gmail.com</p>

        </div>
      </div>
    </>
  )
}
export default Footer;