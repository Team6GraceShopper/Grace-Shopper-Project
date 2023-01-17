import React, {useContext} from 'react'
import {Helmet} from 'react-helmet-async'
import {Store} from '../../Store'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MessageBox from './'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function Cart() {
const {state, dispatch: ctxDispatch} = useContext(Store)
const {
  cart: {cartItems},
} = state;
return(
  <div>
    <Helmet> 
      <title>Shopping Cart</title>
    </Helmet>
    <h1>Shopping Cart</h1> 
    <Row>
      <Col md={8}>
      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty. <Link to ="/AllProducts">Get in bitch we're goin shopping</Link> 
        </MessageBox>
      ) : (
      <ListGroup>
        {cartItems.map((item)=> (
          <ListGroup.Item key={item.id}>
            <Row className='align-items-center'>
              <Col md={4}>
                <img
                src={item.image}
                alt={item.image}
                className='img-fluid rounded img-thumbnail'>
                </img> {' '}
                <Link to={`/singleProduct/${item.id}`}>{item.name}</Link>
              </Col>
              <Col md={3}>
                <Button variant='light' disabled={item.quantity === 1}>
                  <i className='fas fa-minus-circle'></i>
                </Button> {' '}
                <span>{item.quantity}</span>{' '}
                <Button variant='light' disabled={item.quantity === 1}>
                  <i className='fas fa-plus-circle'></i>
                </Button> 
              </Col>
              <Col md={3}>${item.price}</Col>
              <Col md={2}>
                <Button variant="light">
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}  
      </Col>
      <Col md={4}></Col>
    </Row>
  </div>
)
}

