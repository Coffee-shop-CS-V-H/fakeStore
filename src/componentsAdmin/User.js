import React from "react";
import Card from 'react-bootstrap/Card';

function User(props) {
  return(
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>
      {`${props.user.name.firstname} ${props.user.name.lastname}`}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.user.email}
      </Card.Subtitle>
      <Card.Text>
        <h4>{props.user.username}</h4>
        <p>user id: {props.user.id}</p>
      </Card.Text>
    </Card.Body>
  </Card>)
}

export default User;
