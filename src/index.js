import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './API-Components/Api';

searchImages()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);


