import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexProvider from './context/User.Context.jsx'
import BudgetProvider from './context/Budget.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <UserContexProvider>
      <BudgetProvider>
        <App/>
      </BudgetProvider>
     
    </UserContexProvider>,
)
