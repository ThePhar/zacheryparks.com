import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import EasterEgg from "./easteregg";

ReactDOM.render(<App />, document.getElementById('root'));
EasterEgg(); // Shhh... Don't worry about it.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
