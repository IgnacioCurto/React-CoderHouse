//1) Me traigo la librería React
import React from 'react';

//2) Me traigo la librería ReactDOM
import ReactDOM from 'react-dom';

//3) Inserto un componente
import App from './app.jsx';

//4) Renderizo el componente
ReactDOM.render(
    <App />,
    document.getElementById('root')
);