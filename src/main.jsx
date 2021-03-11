import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import Layout from './layout'


ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <Layout />
    </HashRouter>
  </React.Fragment>,
  document.getElementById('root')
)