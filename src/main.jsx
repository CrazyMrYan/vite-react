import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import Layout from './layout'


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)