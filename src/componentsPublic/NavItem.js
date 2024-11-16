import React from 'react'
// import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavItem() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Main</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/profil">Profil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/products">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="/cart">Cart</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavItem

  


