import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, 'Click the button.'),
        React.createElement(Button, { label: 'Like' }),
        React.createElement(Button, { label: 'Dislike' }),
    );
}
ReactDOM.render(React.createElement(Container), document.querySelector('#react-root'));