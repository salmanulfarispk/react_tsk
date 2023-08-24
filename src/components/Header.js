import React from 'react'
import { useState } from 'react'
import './Style.css'


const Header = () => {
   
const [currentclr,updatedclr]=useState(false)
let changeclr=()=>{
  updatedclr(!currentclr)}
   const background= currentclr? 'black': 'white';



  return (
    <div  style={{background}} >

 

 <button onClick={changeclr}>Darkmode</button>


    </div>
  )
  
  }
export default Header

