import React from "react"

 function Hero(props){
   const styles = {height: 150, width :150}
   const phrase = props.catchPhrase;
    
   return (
        
        
        <div>
            
            <h3 onClick={() => alert(props.catchPhrase)}>Superhero: {props.name}</h3>
            <p>Show: {props.show}</p>
            <img src={props.imageName} {...styles} onClick={() => alert(props.catchPhrase)}></img>
            
        </div>

    )

}

export default Hero