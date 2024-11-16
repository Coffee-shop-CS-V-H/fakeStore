import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavItem() {
  return (
    <>
    <p className="text-center mt-4 mb-4">Fakestore webshop</p>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/home">Main</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/profil">Profil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
    
  );
}

export default NavItem

  


