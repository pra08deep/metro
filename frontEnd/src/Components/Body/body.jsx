import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Pic from './img/trolley-shopping.gif';
import Bigpic from './img/11697.jpg'
import "./body.css";
export default  function body(){
    return(
    

      <Container >
    
      <Row>
        <Col className="first-cl">
        <h1 className="heading" >Nepal Best Super Market</h1>
        <p className="sub-heading" >Metro Market contains large amount of grocery and home appliance. High quality and located in many places and growing and connect in all Nepal.</p>
        <Button className="border-button">Read More</Button><br/>
        <Button className="btn-animation">Click me!</Button>
        <img src={Pic}  className="pic" />
        </Col>
        <Col className="second-cl">
          <img src={Bigpic}  className="bigpic"/>
          </Col>
      </Row>
    </Container>
 

    )
}
