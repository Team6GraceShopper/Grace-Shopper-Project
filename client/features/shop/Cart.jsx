import React, {useContext} from 'react'

import {Store} from '../../Store.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MessageBox from '../components/MessageBox.jsx'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom' 

export default function Cart() {
const x = useContext(Store);
console.log(x)
// const {
//   cart: {cartItems},
// } = state;
return (
  <div>
    <h1>Shopping Cart</h1>
    </div>
    )
}