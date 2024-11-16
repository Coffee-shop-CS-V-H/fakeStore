import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
        {props.product.descreption}
        </Card.Text>
        <Button variant="primary">Buy me!</Button>
      </Card.Body>
    </Card>
  );
}

export default PCard;