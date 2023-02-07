import React, { Component } from 'react';

export class Reorder extends Component {


    constructor(props) {
        super(props);
        this.state = { m: [], loading: true };
    }

    componentDidMount() {
        this.getData();
    }
    handleSubmit(event) {
        event.preventDefault();
        window.localStorage.setItem('product', "Detergent");
        window.localStorage.setItem('quantity', "3");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="status">Choose Product: </label>
                <select name="orderID" id="requestStatus">
                    <option value="1">Detergent</option>
                    <option value="2">Bleach</option>
                    <option value="3">Cleaning Bucket</option>
                </select><br />
                <label for="status">Choose Quantity: </label>
                <select name="orderID" id="requestStatus">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select><br />
                <label for="status">Choose Manufacturer: </label>
                <select name="orderID" id="requestStatus">
                    <option value="George">George</option>
                    <option value="John">John</option>
                    <option value="Mary">Mary</option>
                </select><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
    async getData() {
        const response = await fetch('https://localhost:44417/manufacturer');
        const data = await response.json();
        console.log(data);
       this.setState({ m: data, loading: false });
    }
}
