import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        const { id, name, type, price, img } = this.props.data;
        console.log(this.props.data);

        return (
            
            <div class="container">
                <h1>Hello World!</h1>
                <div class="row">
                    <div class="col-sm-6">
                        <p>Lorem ipsum...</p>
                    </div>
                    <div class="col-sm-6">
                        <p>Sed ut perspiciatis...</p>
                    </div>
                </div>
            </div>
        )
    }
}