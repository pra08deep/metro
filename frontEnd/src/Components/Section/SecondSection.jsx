import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'react-bootstrap';
import './secondsection.css'

const Gallery = ({ images }) => {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleShow = (img) => {
    setSelectedImg(img);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  

  return (

    <div>
      
    <Container>
      <Row>
        <Col>
        <div className="sectionheading" >
    <h1>Metro Market Offer  </h1>
    <h>Visit our near Store</h>
    <p>Location:Sanepa,Pepsicola,Jorpati,Kapan </p>
    <p>Offer Valid Date</p>
    <h1></h1>
    </div>
        </Col>
       
      </Row>
    </Container>
    <Container className="image-body">
      <Row>
   
    
        {images.map((img) => (
          <Col xs={6} md={4} lg={3} key={img.id}>
          
            <img
              src={img.url}
              alt={img.alt}
              className="img-thumbnail"
              onClick={() => handleShow(img.url)}
            />
           
          </Col>
        ))}
        
   
      </Row>
      
      <Modal show={show} onHide={handleClose} centered>
        <ModalBody>
          <img src={selectedImg} alt="Selected" className="img-fluid" />
        </ModalBody>
      </Modal>
    </Container>
    </div>  

  );
};

export default Gallery;
//import Pic from './img/3.jpg';
