import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexProvider from './context/User.Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <UserContexProvider>
      <App />
    </UserContexProvider>,
)
