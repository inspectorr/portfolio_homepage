import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const lang = navigator.language;
ReactDOM.render(<App lang={lang}/>, document.getElementById('root'));
