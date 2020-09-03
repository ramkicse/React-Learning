import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Counter extends React.Component{

    constructor(props){

        super()
        this.state = {
            count : Number(props.count)
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState({count : this.state.count + 1})
    }

    decrement(){
        this.setState((prevState)=> {
            return {count : prevState.count - 1};
        })
    }
    reset(){
        this.setState({count : 0})
    }
    render(){
        return (<div>
            Counter value : {this.state.count}
            <br/>
            
            <button className="btn btn-success" onClick={this.increment}>+</button>
            <button className="btn btn-danger" onClick={this.decrement}>-</button>
            <button className="btn btn-primary" onClick={this.reset}>Reset</button>
            <span>
                <FontAwesomeIcon icon='plus' />
            </span>
        </div>
        )

    }
}


export default Counter