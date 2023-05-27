import React, {useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import {toast} from "react-toastify";
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Pic from './img/trolley-shopping.gif';
import Bigpic from './img/11697.jpg'
import "./body.css";
export default  function body(){
  const [data,setData]=useState([]);
  const loadData=async()=>{
    const response= await axios.get("http://localhost:8089/api/get")
    setData(response.data);
  };

  useEffect(()=>{
    loadData();
  },[]);


  var bigpic=  data.map((item) => {
    
     {item.header_image2}
       

  })
    return(
    

      <Container >
    
      <Row>
        <Col className="first-cl">
        <h1 className="heading">
            {data.map((item) => {
              return(
               <div>{item.header_text1}
                 </div>
              )
            })}
            </h1>
           
        <p className="sub-heading" >
        {data.map((item) => {
              return(
               <div>{item.header_text2}
                 </div>
              )
            })}
        </p>
        <Button className="border-button">Read More</Button><br/>
        <Button className="btn-animation">Click me!</Button>
        <img src={Pic}  className="pic" />
        </Col>
        <Col className="second-cl">
        {data && <img src={data.header_image2} alt="Database Image" />}
          </Col>
      </Row>
    </Container>
 

    )
}
//   Nepal Best Super Market
//   <img src={bigpic}  className="bigpic"/>