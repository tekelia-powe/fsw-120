import React from "react"

function ColoredBoxes(props){

    const styles = {
        backgroundColor: props.color,
        height: 200,
        weight: 200,
    }
    return (
        
        <div className="boxes" style={styles}>
            
            <h3>{props.title}</h3>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        
        </div>

    )

}

export default ColoredBoxes