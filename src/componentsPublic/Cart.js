import React, { useContext} from 'react'
import { KosarContext } from '../contexts/KosarContext';
import Card from 'react-bootstrap/Card';


function Cart(props) {
  
const {kosar, dbModosit} = useContext(KosarContext);
  return (
    <>
       <Card style={{ width: '18rem'}}>
      
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text style={{ flexGrow: 1 }}>
        {props.product.price} $
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    </>
  );
}

export default Cart


