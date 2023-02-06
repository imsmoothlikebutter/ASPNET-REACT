import React, { Component } from 'react';

export class SRead extends Component {

    constructor(props) {
        const name = localStorage.getItem("SName");
        super(props);
        this.state = {
            ms: [], loading: true, sn: name
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
                    </tr>
                </thead>
                <tbody>
                    {m.map(agents =>
                        <tr key={agents.id}>
                            <td>{agents.shippingAgentName}</td>
                            <td>
                                <a className="action" onClick={(id) => this.handleEdit(agents.id)}>Edit</a>  </td>
                            <td>Delete</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <a onClick={event => window.location.href = '/shippingagent/create'}>Create New Shipping Agent</a></td>
                        <td>    <a onClick={event => window.location.href = '/shippingagent/assign'}>Assign Shipping Agent</a></td>
                    </tr>
                  
                
                </tfoot>
            </table>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : SRead.renderMTable(this.state.ms);

        return (
            <div>
                <h1 id="tableLabel">Shipping Agents</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
    async getData() {
        const response = await fetch('https://localhost:44417/shippingagent');
        const data = await response.json();
        console.log(data);
        var newarr = data;
        var ce = {
            ShippingAgentName: this.state.sn,
         
        }
        newarr.push(ce);
        this.setState({ ms: newarr, loading: false });
    }

}
