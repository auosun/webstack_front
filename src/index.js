import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './component/menu'
import Block from './component/block'
import reportWebVitals from './reportWebVitals';

const menu = ReactDOM.createRoot(document.getElementById('menu'));
menu.render(
      <Menu />
);

const block = ReactDOM.createRoot(document.getElementById('block'));
block.render(
    <Block />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
