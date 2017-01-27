import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout'

class App extends React.Component {
    render () {
      return ( <Layout/> )
    }
}

function run() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}
