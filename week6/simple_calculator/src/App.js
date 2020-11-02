import React, {Component} from 'react'
import Result from './Result'
import Keypad from './Keypad'
import './App.css'

class App extends Component{
  constructor(){
  super()

  this.state = {
    result: ""
  }
}
onClick = button => {

  if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  
  else {
      this.setState({
          result: this.state.result + button
      })
  }
}

calculate(){
  
  try {
    this.setState({
        
        result: (eval(this.state.result) || "" ) + ""
    })
} catch (e) {
    this.setState({
        result: "Error Detected"
    })

}
};

reset(){
  this.setState({
      result: ""
  })
};
render() {

  return(
    <div>
    <div className="calculator">
        <h1>My React Calculator</h1>
        <Result result={this.state.result}/>
        <Keypad onClick={this.onClick}/>
    </div>
  </div>
  
  
  );
  
  
  }
  }
  export default App;
  
