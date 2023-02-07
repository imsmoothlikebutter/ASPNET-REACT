import React, { Component } from 'react';
const items1 = [
    { date: "10/17/2018", product:"Magiclean",quantity:"5",price:"$50" },
    { date: "10/18/2018", product: "Clorox", quantity: "3", price: "$25" },
];
const items2 = [
    { date: "10/17/2018", product: "MR Muscle", quantity: "5", price: "$50" },
    { date: "10/18/2018", product: "Clorox", quantity: "3", price: "$25" },
];
const items3 = [
    { date: "10/17/2018", product: "Clorox", quantity: "5", price: "$50" },
    { date: "10/18/2018", product: "Clorox", quantity: "3", price: "$25" },
];
export class RefundCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderId: '',
            Reason: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log("OrderId: " + this.state.OrderId);
        console.log("Reason: " + this.state.Reason);
    }
    render() {
        function populateTable() {
            var newtable = document.createElement('tbody')
            newtable.id = "tablebody";
               var oldtable = document.getElementById("tablebody")
               oldtable.parentNode.replaceChild(newtable, oldtable);
        }
        function loadTableData(itemNo) {
            if (itemNo === "77112") {
                var items = items1;
            } else if (itemNo === "22112") {
                var items = items2;
            } else {
                var items = items3;
            }
            console.log(items);
            const table = document.getElementById("tablebody");
            items.forEach(item => {
                let row = table.insertRow();
                let date = row.insertCell(0);
                date.innerHTML = item.date;
                let product = row.insertCell(1);
                product.innerHTML = item.product;
                let quantity = row.insertCell(2);
                quantity.innerHTML = item.quantity;
                let price = row.insertCell(3);
                price.innerHTML = item.price;
            });
        }
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    OrderId:
                    <select value={this.state.OrderId} onChange={(event) => {
                        this.setState({
                            OrderId: event.target.value
                        });
                            populateTable();
                            console.log(event)
                            loadTableData(event.target.value);
                    }}>
                        <option id="1" value="77112">77112</option>
                        <option id="2" value="22112">22112</option>
                        <option id="3" value="33112">33112</option>
                        </select>
                </label>
                <label>
                    Reason:
                    <input type="text" value={this.state.Reason} onChange={(event) => {
                        this.setState({
                            Reason: event.target.value
                        });
                    }} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="tablebody">
                            <tr>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ); 
    }

}

