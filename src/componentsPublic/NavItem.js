import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function NavItem() {
  const [selectedNav, setSelectedNav] = useState("");
  const navigate = useNavigate();

  const initialMenu = (
    <div>
      <button onClick={() => setSelectedNav("home")}>Home</button>
      <button onClick={() => setSelectedNav("admin")}>Admin</button>
    </div>
  );

  const homeMenu = (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/profil">
          Profil
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/products">
          Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/cart">
          Cart
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <button
          onClick={() => {
            setSelectedNav("");
            navigate("/");
          }}
        >
          Back
        </button>
      </Nav.Item>
    </Nav>
  );

  const adminMenu = (
    <Nav defaultActiveKey="/admin" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="productsA">
          Product
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/orders">
          Orders
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <button onClick={() => setSelectedNav("")}>Back</button>
      </Nav.Item>
    </Nav>
  );

  return (
    <div>
      {selectedNav === "" && initialMenu}
      {selectedNav === "home" && homeMenu}
      {selectedNav === "admin" && adminMenu}
    </div>
  );
}

export default NavItem;
