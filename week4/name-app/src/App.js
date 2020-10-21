
import React, {Component} from 'react';

import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
          fullName: "",
          fullList: []
        }
    

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
}

handleChange(event){
  const {name, value} = event.target
  this.setState({[name]:value})
  
  
}

handleClick(event){
const list = this.state.fullList.push(this.state.fullName)
      
 console.log(this.state.fullList)
 
event.preventDefault();
}


render(){
  
  return(
    <form>
      Name: <input 
      type="text"
      value = {this.state.fullName}
      name = "fullName"
      placeholder = "Please enter your full name."
      onChange = {this.handleChange}
      />
      <button onClick={this.handleClick}>Add to List</button>
      <h1> {this.state.fullName}</h1> 
      <ol> {this.state.fullList.map((item) => (
          <li>{item}</li>
        ))}</ol>
      
    </form>


  )
}
}

export default App;
