import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Background  from './components/Background.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Background/> */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
