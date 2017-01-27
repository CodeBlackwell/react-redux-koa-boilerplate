import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout'
import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants'

export default class Homepage extends Component {
    render () {
        return (
            <div className="homepage">
                <Layout/>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [HOMEPAGE_KEY]: {
        profile
        }
    } = state;
    //@formatter:on
    return {
        profile
    };
};

export default connect(mapStateToProps)(Homepage);
