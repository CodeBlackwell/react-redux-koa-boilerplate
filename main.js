import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
      return (
        <div>
          <h1>Ohai!</h1>
          <p>The phrase is an intentionally misspelled "Oh hi" and is usually used as a title on cutesy pictures of animals like on lolcats.</p>
        </div>
      )
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
