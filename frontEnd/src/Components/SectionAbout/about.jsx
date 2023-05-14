import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg.jpeg';
import  './about.css'


const images = [
    { url: 'src/Components/SectionAbout/img/bg.jpeg', alt: 'Image 1', caption: 'Caption 1' },
    { url: 'src/Components/Section/img/3.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { url: 'src/Components/SectionAbout/img/bg.jpeg', alt: 'Image 3', caption: 'Caption 3' },
  ];




//image on about
/*const images = [
    {
    src: {bg},
      alt: 'First slide',
      caption: 'First slide'
    },
    {
      src: 'https://picsum.photos/id/1015/600/400',
      alt: 'Second slide',
      caption: 'Second slide'
    },
    {
      src: 'https://picsum.photos/id/1021/600/400',
      alt: 'Third slide',
      caption: 'Third slide'
    }
  ];*/
  /*const images = [
    {
      id: 1,
      url: 'src/Components/SectionAbout/img/bg.jpeg',
      alt: 'First Image'
    },
    {
      id: 2,
      url: 'src/Components/SectionAbout/img/bg.jpeg',
      alt: 'Second Image'
    },
    {
      id: 3,
      url: 'src/Components/SectionAbout/img/bg.jpeg ',
      alt: 'Third Image'
    },

  ];*/

export default function about(){
    return(
        <Container >
            <Row>
                <Col className="AboutHeading">
                <h>About Metro</h>

                </Col>
            </Row>
        <Row className="About" >
                      

          <Col sm>
          <Carousel className="Carouselimg" interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              className="aboutimgs img-fluid"
              src={image.url}
              alt={image.alt}
            
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
            </Col>
          <Col className="Abouttext">
            <h>METRO MARKET</h>
            <hr/>
            <p>Metro market is Convinent store having more than 5000+ items
            located on many place like Sanepa,Pepsicola,Jorpati and kapan which remains 
              growing on different place</p>

          </Col>

        </Row>
        <Row>
          <Col className="Aboutother">Team</Col>
          <Col className="Aboutother">Gallery</Col>
          <Col      className="Aboutother"></Col>
        </Row>
      </Container>

    )
}

/*<>
{['Dark',
].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
))}
</>   


  <Carousel className="Carouselimg" interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              className="aboutimgs img-fluid"
              src={image.url}
              alt={image.alt}
            
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
*/