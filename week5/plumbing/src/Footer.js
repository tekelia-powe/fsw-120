import React from "react"
import "./App.css"

import pic1 from "./images/licensed.png"
import pic2 from "./images/ontime.png"
import pic3 from "./images/satisfaction.png"

function Footer() {

    return (
        <div className="footer">
        <div className="footer_item">
        <h3>Affordable Plumbing Heating & Air </h3>
        <p>1234 Any Street S <br></br>
        Mobile, AL 36652<br></br>
        (251) 308-5321</p></div>
        <div className="footer_item">
        <div className="image_container">
        <img className="image" src={pic1} alt="Pic1" />
        <img className="image" src={pic2} alt="Pic2" />
        <img className="image" src={pic3} alt="Pic3" />
    </div></div></div>
    )}

export default Footer