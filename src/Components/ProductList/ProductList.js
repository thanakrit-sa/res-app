import React, { Component } from 'react';
import Product from '../Product/Product'
import {dataShop} from '../../data.js'

export default class ProductList extends Component {

    state2 = {
        dataFromdataShop: dataShop
    }  

    render() {
        const {dataFromdataShop} = this.state2;

        return (
            <div>
                {dataFromdataShop.map(data =>(
                    <Product key={data.id} data={data}/>
                ))}
            </div>
        )
    }
  }