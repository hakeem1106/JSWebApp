﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'Gerald Bryant');

const container = React.createElement('div', {}, title);

ReactDOM.render(
    container,
    title,
    document.getElementById('global')
);