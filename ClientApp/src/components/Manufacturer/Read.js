import React, { Component } from 'react';

export class Read extends Component {

    constructor(props) {
        const name = localStorage.getItem("Name");
        const email = localStorage.getItem("Email");
        const contact = localStorage.getItem("Contact");
        super(props);
        this.state = {
            m: [], loading: true , n:name,e:email,c:contact
        }
       
    }

    componentDidMount() {
        this.getData();
    }

    static renderMTable(m) {
        return (
          
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
                    <a onClick={event => window.location.href = '/Manufacturer/create'}>Create New Manufacturer</a> 
                </tfoot>
            </table>    
        
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Read.renderMTable(this.state.m);

        return (
            <div>
                <h1 id="tableLabel">Manufacturers</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
    async getData() {
        const response = await fetch('https://localhost:44417/manufacturer');
        const data = await response.json();
        console.log(data);
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
