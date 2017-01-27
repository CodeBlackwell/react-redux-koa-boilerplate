import React from 'react';
import ReactDOM from 'react-dom';
import theRoot from './src/index'


function run() {
 ReactDOM.render(theRoot(), document.getElementById('root'));
}

if (window.addEventListener) {
 window.addEventListener('DOMContentLoaded', run);
} else {
 window.attachEvent('onload', run);
}
