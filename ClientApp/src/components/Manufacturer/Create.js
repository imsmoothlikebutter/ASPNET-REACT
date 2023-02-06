import React, { Component } from 'react';
export class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Contact: " + this.state.contact);
        var data = new FormData();
        data.append("Name", this.state.name);
        data.append("Email", this.state.email);
        data.append("Contact", this.state.contact);
        window.localStorage.setItem('Name', this.state.name);
        window.localStorage.setItem('Email', this.state.email);
        window.localStorage.setItem('Contact', this.state.contact);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={(event) => {
                        this.setState({
                            name: event.target.value
                        });
                    }} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={(event) => {
                        this.setState({
                            email: event.target.value
                        });
                    }} />
                </label>
                <label>
                    Contact:
                    <input type="text" value={this.state.contact} onChange={(event) => {
                        this.setState({
                            contact: event.target.value
                        });
                    }} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

