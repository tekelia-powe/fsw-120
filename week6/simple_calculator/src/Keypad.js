import React , {Component} from 'react'

class Keypad extends Component {
    
    render() {

        return(
            <div className="keypad">
                                
                <button id="C" name="C" onClick={evt => this.props.onClick(evt.target.name)}>C</button><br/>


                <button name="1" onClick={evt => this.props.onClick(evt.target.name)}>1</button>
                <button name="2" onClick={evt => this.props.onClick(evt.target.name)}>2</button>
                <button name="3" onClick={evt => this.props.onClick(evt.target.name)}>3</button>
                <button name="+" onClick={evt => this.props.onClick(evt.target.name)}>+</button><br/>


                <button name="4" onClick={evt => this.props.onClick(evt.target.name)}>4</button>
                <button name="5" onClick={evt => this.props.onClick(evt.target.name)}>5</button>
                <button name="6" onClick={evt => this.props.onClick(evt.target.name)}>6</button>
                <button name="-" onClick={evt => this.props.onClick(evt.target.name)}>-</button><br/>

                <button name="7" onClick={evt => this.props.onClick(evt.target.name)}>7</button>
                <button name="8" onClick={evt => this.props.onClick(evt.target.name)}>8</button>
                <button name="9" onClick={evt => this.props.onClick(evt.target.name)}>9</button>
                <button name="*" onClick={evt => this.props.onClick(evt.target.name)}>x</button><br/>


                <button name="." onClick={evt => this.props.onClick(evt.target.name)}>.</button>
                <button name="0" onClick={evt => this.props.onClick(evt.target.name)}>0</button>
                <button name="=" onClick={evt => this.props.onClick(evt.target.name)}>=</button>
                <button name="/" onClick={evt => this.props.onClick(evt.target.name)}>÷</button><br/>
            </div>    


        )


    }
}

export default Keypad