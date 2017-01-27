import React, { Component } from 'react';

export default class Layout extends Component {
    render () {
        const { profile, greeting } = this.props;

        return (
            <div>
                <h1>{ greeting }</h1>
                <p>{ (Object.keys(profile).indexOf(null) === -1) ? profile : 'React, Redux, ImmutableJS, koa! Hire me !' }</p>
            </div>
        );
    }
}
