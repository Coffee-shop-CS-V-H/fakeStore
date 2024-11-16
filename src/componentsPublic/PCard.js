import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.image} style={{
        width: 'auto',
        maxHeight: '300px',
        
      }} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text style={{ flexGrow: 1 }}>
        {props.product.descreption}
        </Card.Text>
        <Button variant="primary" style={{ marginTop: 'auto' }}>Buy me!</Button>
      </Card.Body>
    </Card>
  );
}

export default PCard;