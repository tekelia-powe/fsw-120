import React from 'react'

class DiceBox extends React.Component {
    constructor (){
        super()
        this.state = {

            num1: 0,

            num2: 0,

            num3: 0,

            num4: 0,

            num5: 0

        }
        this.handleClick = this.handleClick.bind(this)
    }



    handleClick(){
        this.setState({num1: Math.floor(Math.random() * 6)+1})
        this.setState({num2: Math.floor(Math.random() * 6)+1})
        this.setState({num3: Math.floor(Math.random() * 6)+1})
        this.setState({num4: Math.floor(Math.random() * 6)+1})
        this.setState({num5: Math.floor(Math.random() * 6)+1})

    }
   render (){
    return(
        <div>
        <h1>Dice 1: {this.state.num1}</h1>
        <h1>Dice 2: {this.state.num2}</h1>
        <h1>Dice 3: {this.state.num3}</h1>
        <h1>Dice 4: {this.state.num4}</h1>
        <h1>Dice 5: {this.state.num5}</h1>
        <button onClick={this.handleClick}>Roll Dice!</button>
        </div>

    )
}


}

export default DiceBox