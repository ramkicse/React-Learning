import React from 'react'
import { render } from '@testing-library/react'

class BasketBill extends React.Component{
    render(){
        return(<div><button onClick={this.props.calculateBill} className="btn btn-success">Calculate the Bill</button><br/>
        <button onClick={this.props.cleanBasket} className="btn btn-danger">Clean the Basket</button>
        <hr/>
    <h3>Total Bill Cost : &#8377;{this.props.total}</h3>
        </div>)
    }
}

export default BasketBill