import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './scroll.css';
import SecondP from './scroll'

import "./scroll.css";
function scrollToSection() {
  const section = document.getElementById(SecondP);
  const offset = section.offsetTop;
  window.scrollTo({
    top: sectionHeight,
    behavior: 'smooth',
  });
}
export default  function scroll(){
    return(
        <div>
             <Container >
      <Row>
        <Col  >
        <div className="scrollbody">
        <div className="centered-text">
      <h1>Scroll</h1>
      <div className="icon-scroll" onClick={scrollToSection}>
      <i className="fa fa-chevron-up"></i>
    </div>
    </div>
        </div>
     
    
   
        </Col>
      </Row>
    </Container>    
        </div>
    )
}
/*<div className="centered-text">
      <h1>Scroll</h1>
      <div className="icon-scroll" onClick={scrollToSection}>
      <i className="fa fa-chevron-up"></i>
    </div>
    </div>*/