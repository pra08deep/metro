import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Bar from './Components/Sidebar/side'
import Nav from './Components/Navbar/nav'
import Body from './Components/Body/body'
import Scroll from './Components/ScrollingPannel/scroll'
import SecondP from './Components/Section/SecondSection'
import ThirdP from './Components/SectionAbout/about'
import './App.css'

const images = [
  {
    id: 1,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'First Image'
  },
  {
    id: 2,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Second Image'
  },
  {
    id: 3,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Third Image'
  },
  {
    id: 4,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'First Image'
  },
  {
    id: 5,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Second Image'
  },
  {
    id: 6,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Third Image'
  },
  {
    id: 7,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'First Image'
  },
  {
    id: 8,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Second Image'
  },
  {
    id: 9,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Third Image'
  },
  {
    id: 10,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'First Image'
  },
  {
    id: 11,
    url: 'src/Components/Section/img/3.jpg',
    alt: 'Second Image'
  },
];

export default function app(){

  return(
    <div className="app">
   
           
                        <Nav/>
                        <Bar/>
                        <Body/>
                        <Scroll/>
                        <SecondP images={images} selectedImg={images[0].url}/>
                        <ThirdP/>
                        
           
      
  
      
    </div>
  )
}