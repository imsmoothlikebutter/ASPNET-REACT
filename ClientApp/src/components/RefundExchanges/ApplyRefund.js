import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ApplyRefund extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div>
                <h1>Apply for a Refund</h1>
                <form>
                    <label for="status">Choose Order: </label>
                    <select name="orderID" id="requestStatus">
                        <option value="111001">111001</option>
                        <option value="111002">111002</option>
                        <option value="111003">111003</option>
                    </select><br />
                    <label for="reason">Reason: </label>
                    <input type="text" id="reason"></input>
                    <br />
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
            )
    }
}