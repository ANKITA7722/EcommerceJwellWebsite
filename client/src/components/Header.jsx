import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate } from "react-router-dom"
import { useState } from 'react';

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { CiSearch } from "react-icons/ci";


const Header = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const navigate = useNavigate();

  // const handleSearchChange = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
    
  //   // Trigger search and navigate to search page
  //   if (term.trim() !== "") {
  //     navigate(`/search/?product=${term}`);
  //   }
  // };


  return (
    <>
      <div id='Header'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container id='Navbar'>
            <Navbar.Brand href="#home">Diamonddelight</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="home">Home</Nav.Link>
                <NavDropdown title="JWELLERY" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="Necklass">Necklace</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="LongNecklaces">Long Necklace Sets </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Pendant">Pandant Sets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="choker">Chocker Sets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Acccessorice</NavDropdown.Item>

                </NavDropdown>

                <NavDropdown title="COLLECTION" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="collecton" >Collection</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Necklass" >Neckless</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="LongNecklaces">Long Necklace Sets </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Pendant">Pandant Sets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="choker">Chocker Sets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Earring" >Earrings</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Mangalsutra">Mangalsutra</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="mangtika">Maangtika</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="ring">Rings</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="bangle">Bangles</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="Waistbands">Waistbands</NavDropdown.Item>
                  
                  <NavDropdown.Item as={Link} to="">Acccessorice</NavDropdown.Item>

                </NavDropdown>
                {/* <Nav.Link as={Link} to="radytoship">READY TO SHIP</Nav.Link> */}

                <Nav.Link as={Link} to="sale">SALE</Nav.Link>
                <Nav.Link as={Link} to="customerdetails">CustomerDetails</Nav.Link>
                <Nav.Link as={Link} to="search">Search</Nav.Link>
                <Nav.Link as={Link} to="shop">Shop</Nav.Link>
               

              </Nav>

              {/* <InputGroup  style={{width:"20%"}}>
          <InputGroup.Text id="btnGroupAddon"><CiSearch /></InputGroup.Text>
          <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="me-2"
            />
           </InputGroup> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
export default Header;