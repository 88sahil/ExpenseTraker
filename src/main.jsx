import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexProvider from './context/User.Context.jsx'
import BudgetProvider from './context/Budget.jsx'
import ExpenceProvider from './context/Expence.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Trake from './Pages/Trake.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/Home",
    element:<Trake/>
  }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <UserContexProvider>
      <BudgetProvider>
        <ExpenceProvider>
           <RouterProvider router={router}></RouterProvider>
        </ExpenceProvider> 
      </BudgetProvider>
    </UserContexProvider>,
)
