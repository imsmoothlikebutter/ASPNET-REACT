import React, { Component } from 'react';

export class Update extends Component {


    constructor(props) {
        super(props);
        this.state = { m: [], loading: true };
    }

    componentDidMount() {
        this.getData();
    }
    static renderMTable(m) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Update.renderMTable(this.state.m);

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
       this.setState({ m: data, loading: false });
    }
}
