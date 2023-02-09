import React, { Component } from 'react';

class PublicIP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiUrl: props.apiUrl,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, ipAddress: data.ip }));
    }

    render() {
        return (
            <div className="PublicIP">
                {this.state.ipAddress}
                {console.log(this.state.ipAddress)}
                
            </div>
        );
    }

}

export default PublicIP;