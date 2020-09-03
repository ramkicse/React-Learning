

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Products extends React.Component {

    constructor() {
        super();

        this.state = {
            fullName : "Rama",
            procucts: [
                {
                    productId: 1,
                    productName: 'vannilla',
                    productDesc: 'icecreame',
                    productPrice: 12.05,
                    productImage: 'https://addapinch.com/wp-content/uploads/2017/07/old-fashioned-vanilla-ice-cream-recipe-DSC_4239.jpg'
                },

                {
                    productId: 2,
                    productName: 'vannilla',
                    productDesc: 'icecreame',
                    productPrice: 12.05,
                    productImage: 'https://addapinch.com/wp-content/uploads/2017/07/old-fashioned-vanilla-ice-cream-recipe-DSC_4239.jpg'
                },
            ]
        }
    }


    getCustomerName = () => {
        var fname = prompt("FirstName");
        var lname = prompt("Last Name")
        console.log(fname+" "+lname)
        this.setState({
            fullName:fname+" "+lname
        })
        console.log(this.state.fullName)
    }

    handleEvent = () => {
        alert('clicked')
        console.log(this.props)

    }

    deletename = ()=>{
        this.setState({fullName:'Guest'})
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div>
                        <label>ID</label>

                    </div>
                </div>
                <table bgcolor='gray' className="table table-primary">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td> Id</td>
                            <td> Name</td>
                            <td> Desc</td>
                            <td> Price</td>
                            <td> Image</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="3" className="bg-warning">
                                Customer Name : {this.state.fullName}
                                <button onClick={this.deletename}>
                                    <span><FontAwesomeIcon icon='trash' /></span>
                                </button>
                                <button onClick={this.getCustomerName}>
                                    <span><FontAwesomeIcon icon='edit' /></span>
                                </button>
                            </td>
                        </tr>
                        {

                            this.state.procucts.map
                                (
                                    (item) => <List data={item} />)

                        }
                    </tbody>
                </table>
                <button className="btn btn-info" onClick={this.getCustomerName}>getCustomerName</button>
                <button className="btn btn-danger" onClick={this.handleEvent}>Delete</button>
                
            </div>
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
                <td> &#8377; {this.props.data.productPrice} {String(true)}</td>
                <td><img alt='product image' height='100' src={this.props.data.productImage} /></td>

            </tr>
        )
    }
}


export default Products
