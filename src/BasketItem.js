import React from 'react'
import { render } from '@testing-library/react'

class BasketItem extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.qty}</td>
                <td><button onClick={()=> this.props.editBasket(this.props.item)}>Edit</button></td>
                <td><button onClick={() => this.props.removeBasket(this.props.item)}>Remove</button></td>
            </tr>
        )
    }
}

export default BasketItem