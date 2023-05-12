import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Bar from './Components/Sidebar/side'
import Nav from './Components/Navbar/nav'
import Body from './Components/Body/body'
import ScrollSection from './Components/ScrollingPannel/scroll'

export default function app(){

  return(
    <div>
   
           
                        <Nav/>
                        <Bar/>
                        <Body/>
           
      
  
      
    </div>
  )
}