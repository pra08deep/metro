import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




import './footer.css'


function TeamCard({ image,name,location, description }) {
  return (
    <Card>
      <div style={{textAlign: 'center'}}>
    <Card.Img variant="top" src={image} style={{width:'200px',height:'250px',borderRadius: '50%',objectFit: 'cover'}} />
   
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title>{location}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <FaStar />
      <FaStar />
      <FaStar />
    </Card.Body>

    </div> 
  </Card>
  );
}

function TeamCarousel({ teams }) {
  return (
    <Carousel interval={5000} pause={false}>
      {teams.map((team) => (
        <Carousel.Item key={team.name}>
          <TeamCard image={team.image}  name={team.name} location={team.location} description={team.description} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default function footer() {
  const teams = [
    {
     
      name: 'Team 1',
      description: 'Description of team 1',
      image: 'src/Components/SectionAbout/img/bg.jpeg',
      location:'godaeari'

    },
    {
     
      name: 'Team 2',
      description: 'Description of team 2',
      image: 'src/Components/SectionAbout/img/bg.jpeg',
      location:'godaeari'

    },
    // Add more teams here
  ];
  return (
  
 <Container>
        <Row className='feedback'>

        <Col className="Terminals" sm >
         
        <div className="App">
      <TeamCarousel teams={teams} />
    </div>
    
        </Col>
        <Col >
        <div className='form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Loaction</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"  style={{height:'150px'}} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </Col>
        </Row>
        <Row>
          <Col className="footer">
     
          </Col>
          </Row>
      </Container>
    
  );
}

