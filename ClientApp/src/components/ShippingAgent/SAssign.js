import React, { Component } from 'react';

export class SAssign extends Component {


  constructor(props) {
    super(props);
      this.state = {
          name: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSubmit(event) {
    }
  render() {
      return (
          <div>
              <h1>Assign Shipping Agents</h1>
              <form>
                  <label for="status">Choose Order: </label>
                  <select name="orderID" id="requestStatus">
                      <option value="111001">111001</option>
                      <option value="111002">111002</option>
                      <option value="111003">111003</option>
                  </select><br />
                  <label for="status">Choose Shipping Agent: </label>
                  <select name="orderID" id="requestStatus">
                      <option value="DHL">DHL</option>
                      <option value="ParcelForce">Parcel Force</option>
                      <option value="lalamove">LALAMove</option>
                  </select><br />
                  <input type="submit" value="Submit" />
              </form>
          </div>
    );
  }
}
