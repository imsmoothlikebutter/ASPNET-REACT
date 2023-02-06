import React, { Component } from 'react';

export class Refund extends Component {


    constructor(props) {
        super(props);
        this.state = { c: [], loading: true };
    }

    componentDidMount() {
        this.getData();
    }

    static renderCTable(c) {
        return (

            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        {/*<th>RequestId</th>*/}
                        <th>OrderId</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {c.map(Refund =>
                        <tr key={Refund.requestId}>
                            <td>{Refund.orderId}</td>
                            <td>{Refund.reason}</td>
                            <td>{Refund.status}</td>
                            <td>
                                <a className="action" onClick={(id) => this.handleEdit(Refund.requestId)}>Edit</a>  </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <a onClick={event => window.location.href = '/Refund/create'}>Create New Refund</a>
                </tfoot>
            </table>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Refund.renderCTable(this.state.c);

        return (
            <div>
                <h1 id="tableLabel">Refunds</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
    async getData() {
        const response = await fetch('https://localhost:44417/refund');
        const data = await response.json();
        console.log(data);
        this.setState({ c: data, loading: false });
    }
}
