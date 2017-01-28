import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout'
import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants'

class Homepage extends Component {
    render () {
        const { profile, greeting } = this.props;
        return (
            <div className="homepage">
                <Layout
                    profile={ profile }
                    greeting={ greeting }
                />
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [HOMEPAGE_KEY]: {
        greeting,
        profile
        }
    } = state;
    //@formatter:on
    return {
        greeting,
        profile
    };
};

export default connect(mapStateToProps)(Homepage);
