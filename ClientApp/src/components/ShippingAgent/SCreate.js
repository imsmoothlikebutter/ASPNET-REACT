import React, { Component } from 'react';
export class SCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Name: " + this.state.name);
        window.localStorage.setItem('SName', this.state.name);
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
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

