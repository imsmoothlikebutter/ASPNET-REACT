import React, { Component } from 'react';

export class Orders extends Component {


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

          <table className="table table-striped" aria-labelledby="tableLabel">
              <thead>
                  <tr>
                      <th>OrderID</th>
                      <th>CustomerName</th>
                      <th>Shipping Agent</th>
                      <th>Vessel Type</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>111001</td>
                      <td>Michelle</td>
                      <td>DHL</td>
                      <td>Ship</td>
                  </tr>
                  <tr>
                      <td>111002</td>
                      <td>Kelly</td>
                      <td>ParcelForce</td>
                      <td>Plane</td>
                  </tr>
                  <tr>
                      <td>111003</td>
                      <td>Stacey</td>
                      <td>lalamove</td>
                      <td>Truck</td>
                  </tr>
              </tbody>
              <tfoot>
              </tfoot>
          </table>
    );
  }
}
