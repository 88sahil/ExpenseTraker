import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexProvider from './context/User.Context.jsx'
import BudgetProvider from './context/Budget.jsx'
import ExpenceProvider from './context/Expence.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <UserContexProvider>
      <BudgetProvider>
        <ExpenceProvider>
           <App/>
        </ExpenceProvider> 
      </BudgetProvider>
    </UserContexProvider>,
)
