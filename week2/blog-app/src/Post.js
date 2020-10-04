import React from "react"

function Post(props){

    return (
       <div className="post">
           <h2>{props.title}</h2>
           <p>{props.subTitle}</p>
           <p className="test">Posted by <b>{props.author}</b> on {props.date}</p> 
            <hr></hr>
       </div> 
        
    )

}

export default Post