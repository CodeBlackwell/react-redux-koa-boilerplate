import React, { Component } from 'react';


export default class Greeting extends Component {
    render () {
        const { greeting } = this.props;
        return (
            <div>
                <h1 className="greeting">{ greeting }</h1>
            </div>
        )
    }
}
