import React from "react"
import "./App.css"
import tweetData from "./tweetData"


function Main(props) {
  
    return (
         
         
         <div>
             
             <h3>{props.name} {props.user}</h3>
             <p>{props.tweet}</p>
             <img src={props.imageName}></img>
             <br></br>
             
         </div>
 
     )
 
 }
 
 export default Main