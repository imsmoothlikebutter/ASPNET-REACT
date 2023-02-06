import React, { Component } from 'react';

export class RefundExchangesStaff extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div>
                <h1>Refund & Exchanges</h1>
                <h4>Refunds</h4>
                <div id="CustomerRefundTable">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">OrderID</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>111001</td>
                                <td>Damaged in shipping</td>
                                <td>
                                    <form>
                                        <select name="status" id="requestStatus">
                                            <option value="processing">Processing</option>
                                            <option value="successful">Approved</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                        <input type="submit" value="Update" />
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Exchanges</h4>
                <div id="CustomerExchangeTable">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">OrderID</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Status</th>
                                <th scope="col">Assign Shipping</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <a asp-action="ExchangeItemsPage">111004</a>
                                </td>
                                <td>Damaged in shipping</td>
                                <td>
                                    <form>
                                        <select name="status" id="requestStatus">
                                            <option value="processing">Processing</option>
                                            <option value="successful">Approved</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                        <input type="submit" value="Update" />
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <select name="shippingAgent" id="shippingAgent">
                                            <option value="DHL">DHL</option>
                                            <option value="SingPOST">SingPOST</option>
                                            <option value="FedEX">FedEX</option>
                                        </select>
                                        <select name="shippingType" id="shippingType">
                                            <option value="1day">1 Day</option>
                                            <option value="3day">3 Days</option>
                                            <option value="7day">7 Days</option>
                                        </select>
                                        <input type="submit" value="Assign" />
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            )
    }
}