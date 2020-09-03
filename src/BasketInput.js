import React from 'react'
import { render } from '@testing-library/react'

class BasketInput extends React.Component {
  
   
    render() {
       
        // const item = this.props.item;
        // var name =null, price=null, qty=null
        // console.log("item",item)
            
        // if(item){
        //     name = item.name;
        //     price = item.price;
        //     qty = item.qty;
        //     console.log("name",name)
        // }
                
        return (<div className="table">

            

           
            <form onSubmit={this.props.addToBasket}>

                <label> Item Name </label>&nbsp;&nbsp;
                <input type='text' name='name' defaultValue={this.props.item.name}/> &nbsp;&nbsp;
                <br />
                <label> Item Price </label>&nbsp;&nbsp;
                <input type='text' name='price'  defaultValue={this.props.item.price} /> &nbsp;&nbsp;
                <br />
                <label> Item Qty </label>&nbsp;&nbsp;
                <input type='text' name='qty' defaultValue={this.props.item.qty}/> &nbsp;&nbsp;
                <button className="btn btn-primary">Add To Basket</button>
            </form>
        </div>)
    }
}

export default BasketInput