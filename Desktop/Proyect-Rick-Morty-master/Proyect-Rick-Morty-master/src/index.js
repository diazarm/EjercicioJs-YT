import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//primero instalo npm install react-router-dom, luego lo importo
import {BrowserRouter} from 'react-router-dom';

// luego Abrazo mi App con BrowserRouter
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  
  document.getElementById('root')
)
