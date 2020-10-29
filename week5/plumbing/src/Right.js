import React from "react"
import "./App.css"
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.png"
import pic3 from "./images/pic3.jpg"

function Right() {

    return (
        <div className="right">
        <img src={pic1} alt="Pic1" /><br></br>
        <img src={pic2} alt="Pic2" /><br></br>
        <img src={pic3} alt="Pic3" /><br></br>
    </div>
    )}

export default Right