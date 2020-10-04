import React from "react"

function Cards(props){
   let color = "black";
   let price = ""
    if (props.timeToGo === "Spring"){
        color = "orange"
    }else if (props.timeToGo === "Winter"){
        color = "white"
    }else if (props.timeToGo === "Fall"){
        color = "green"
    }if (props.timeToGo === "Summer"){
        color = "red"
    }
    const styles = {
        backgroundColor: color
        
    }

    
    if (props.price < 500){
        price = "$"
    }else if (500 < props.price && props.price < 1000){
        price = "$$"
    }else if (props.price > 1000){
        price = "$$$"
    }

    return (
        
        
        <div className="cards" style={styles}>
            
            <h3>Place to Visit: {props.place}</h3>
            <p><b>Price: $</b> {props.price}</p>
            <p><b>Best Time to Go:</b> {props.timeToGo}</p>
            <p>{price}</p>
        </div>

    )

}

export default Cards