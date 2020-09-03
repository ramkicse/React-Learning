import React from 'react'
import BasketItem from './BasketItem';


class BasketList extends React.Component {
    render() {
        return (

            <table border="1">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.itemList.map((item) => (
                        <BasketItem key={Math.random()} item={item} 
                        editBasket={this.props.editBasket} 
                        removeBasket={this.props.removeBasket}/>
                    ))
                    }
                </tbody>
            </table>



        )
    }
}

export default BasketList