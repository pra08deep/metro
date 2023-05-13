import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFilterLeft } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import {BsCircle  } from 'react-icons/bs';

import "./side.css";
export default  function side(){
    return(

         <Container bg="whight" fluid="md" className="con">
      <Row >
        <Col >
           
            <div className="point">
            <BsCircleFill className="circle"/>
            <BsCircle className="circle"/>
            <BsCircle className="circle"/>
            <BsCircle className="circle"/>
            </div>
        </Col>
      </Row>
    </Container>
 
    )
}
