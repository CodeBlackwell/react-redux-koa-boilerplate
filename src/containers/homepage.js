import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Greeting from '../components/greeting'
import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants'


class Homepage extends Component {
    render () {
        const { greeting } = this.props;
        return (
            <div className="homepage">
                <Greeting
                    greeting={ greeting }
                />
                <Link to="profile">Click to display my details!</Link>
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [HOMEPAGE_KEY]: {
        greeting,
        }
    } = state;
    //@formatter:on
    return {
        greeting,
    };
};

export default connect(mapStateToProps)(Homepage);
