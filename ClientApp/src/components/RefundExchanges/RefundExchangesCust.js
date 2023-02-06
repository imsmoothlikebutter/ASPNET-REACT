import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RefundExchangesCust extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div>
                <h1>Refund & Exchanges</h1>
                <h4>My Refunds</h4>
                <button><Link to="/RefundExchangesCust/ApplyRefund">Request Refund</Link></button>
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
                                <td>Processing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>My Exchanges</h4>
                <button><Link to="/RefundExchangesCust/ApplyExchange">Request Exchange</Link></button>
                <div id="CustomerExchangeTable">
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
                                <td>
                                    <a asp-action="ExchangeItemsPage">111004</a>
                                </td>
                                <td>Damaged in shipping</td>
                                <td>Processing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button><Link to='/RefundExchangesStaff'>STAFF VIEW</Link></button>

            </div>
            )
    }
}