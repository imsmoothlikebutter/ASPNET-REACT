import React, { Component } from 'react';

export class Read extends Component {

    constructor(props) {
        const name = localStorage.getItem("Name");
        const email = localStorage.getItem("Email");
        const contact = localStorage.getItem("Contact");
        const product = localStorage.getItem("product");
        const quantity = localStorage.getItem("quantity");
        super(props);
        this.state = {
            m: [], loading: true , n:name,e:email,c:contact , p: product, q :quantity
        }
       
    }

    componentDidMount() {
        this.getData();
    }

    static renderMTable(m) {
        return (
            <div>
          <div id = "Manufacturer Table">
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {m.map(manufacturers =>
                        <tr key={manufacturers.id}>
                            <td>{manufacturers.manufacturerName}</td>
                            <td>{manufacturers.manufacturerContactNumber}</td>
                            <td>{manufacturers.manufacturerEmail}</td>
                            <td>
                                <a className="action" onClick={(id) => this.handleEdit(manufacturers.id)}>Edit</a>  </td>
                            <td>Delete</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td><a onClick={event => window.location.href = '/Manufacturer/create'}>Create New Manufacturer</a> </td>
                        <td><a onClick={event => window.location.href = '/Manufacturer/reorder'}>Re-order</a>
                        </td>                    </tr>
                 
                </tfoot>
                </table>    
            </div>
                <div id="Reorder Table">
                    <h1 id="tableLabel">Reorder Details</h1>
                    <table className="table table-striped" aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Manufacturer</th>
                            <th>Date</th>
                        </tr></thead>
                        <tbody><tr><td>Detergent</td>
                            <td>4</td>
                            <td>George</td>
                            <td>07/02/2023</td></tr></tbody>
                        </table>
           

                    </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Read.renderMTable(this.state.m);

        return (
            <div>
                <h1 id="tableLabel">Manufacturers</h1>
                {contents}
            </div>
        );
    }
    async getData() {
        const response = await fetch('https://localhost:44417/manufacturer');
        const data = await response.json();
      
        var newarr = data;
        var ce = {
            manufacturerName: this.state.n,
            manufacturerContactNumber: this.state.c,
            manufacturerEmail: this.state.e,
        }

        newarr.push(ce);
        this.setState({ m: newarr, loading: false });
    }
   
}
