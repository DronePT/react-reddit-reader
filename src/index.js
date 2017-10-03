import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './app/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
