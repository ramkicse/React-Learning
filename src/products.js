

import React from 'react';


class Products extends React.Component {

    constructor() {
        super();

        this.state = {
            procucts: [
                {
                    productId : 1,
                    productName : 'vannilla',
                    productDesc : 'icecreame',
                    productPrice :  12.05,
                    productImage : 'https://addapinch.com/wp-content/uploads/2017/07/old-fashioned-vanilla-ice-cream-recipe-DSC_4239.jpg'
                },
    
                {
                    productId : 2,
                    productName : 'vannilla',
                    productDesc : 'icecreame',
                    productPrice :  12.05,
                    productImage : 'https://addapinch.com/wp-content/uploads/2017/07/old-fashioned-vanilla-ice-cream-recipe-DSC_4239.jpg'
                },
            ]
        }
    }
  


    render() {
        return (

            <table border="3">
                <thead>
                    <tr>
                        <td> Id</td>
                        <td> Name</td>
                        <td> Desc</td>
                        <td> Price</td>
                        <td> Image</td>
                    </tr>
                </thead>

                <tbody>
                {

                    this.state.procucts.map
                        (
                            (item) => <List data={item} />)

                }
                </tbody>
            </table>

        )
    }


}



class List extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.productId}</td>
                <td>{this.props.data.productName}</td>
                <td>{this.props.data.productDesc}</td>
                <td> &#8377; {this.props.data.productPrice}</td>
                <td><img alt='product image' height='100' src={this.props.data.productImage} /></td>

            </tr>
        )
    }
}


export default Products
