import React from 'react'
import BasketInput from './BasketInput';
import BasketList from './BasketList';
import BasketBill from './BasketBill';


class ShoppingBasket extends React.Component{

    constructor(){
        super()
        this.state = {
            baskets : [],
            total:0.0,
            item:{
                name : '',
                price: '',
                qty:''
            }
        }

        this.addToBasket = this.addToBasket.bind(this)
        this.editBasket = this.editBasket.bind(this)
        this.removeBasket = this.removeBasket.bind(this)
        this.cleanBasket =this.cleanBasket.bind(this)
        this.calculateBill = this.calculateBill.bind(this)
    }

    editBasket(editItem){
        console.log('edit basket called')
        this.state.baskets.filter((item)=> item.name ==editItem.name)
        // this.setState((prevState) => ({
        //     baskets: prevState.baskets.concat(item)
        // }))
        this.setState(()=>({
            item:editItem
        }))
    
    }

    removeBasket(removeItem){
        console.log('remove basket called')
        this.setState((prevState) => ({
            baskets: prevState.baskets.filter((item)=> item.name !=removeItem.name)
            
        }))
       
    }

    addToBasket(e){
        e.preventDefault()
        console.log(e)
        console.log("e=>",e.target.elements.name.value)
        const itemName = e.target.elements.name.value.trim()
        const itemPrice = Number(e.target.elements.price.value.trim())
        const itemQty = Number(e.target.elements.qty.value)
       
        
        var data ={}
        data.name = itemName
        data.price = itemPrice
        data.qty = itemQty



        console.log(itemName)
        var temp = this.state.baskets.filter((item)=> item.name !=data.name)
        if (temp.length > 0) {
            return 'You already added'
        }
        this.setState((prevState) => ({
            baskets: prevState.baskets.concat(data)
        }))
        console.log(this.state.baskets)
    }

    calculateBill(){
        console.log('calculateBill called')
        var localTotal = 0.0
        this.state.baskets.map((item)=>{
            localTotal+=item.price*item.qty
        })
        console.log(localTotal)
        this.setState(() => ({
            total: localTotal
        }))
    }
    cleanBasket(){
        console.log('cleanBasket called')
        this.setState(() => ({
            baskets: [],
            total:0.0
        }))
    }

    render(){
        return(
            <div>

                <Header title="Shopping Website"  subtitle="Buy Anything"/>
                <BasketInput addToBasket={this.addToBasket} item={this.state.item} />
                <div className="table">
                    <BasketList itemList={this.state.baskets}
                     editBasket={this.editBasket} 
                     removeBasket={this.removeBasket}
                   />
                </div>
                <BasketBill calculateBill={this.calculateBill} cleanBasket={this.cleanBasket} total={this.state.total}/>
            </div>
        )
    }
}


const Header = (props)=>{
    return(
        <div className="table text-center">
        <h1 className="bg-dark text-warning">{props.title}</h1>
        <hr color="blue" />
        <marquee behavior="alternate"> <h3 className="bg-muted text-info">{props.subtitle}</h3></marquee>
        <hr color="blue" />

    </div>
    )
}
export default ShoppingBasket