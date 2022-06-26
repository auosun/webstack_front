import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./component/main";


const pageContainer = ReactDOM.createRoot(document.getElementById('pageContainer'))
pageContainer.render(
    <Main/>
)
