import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./pages/HomePage"
import ThoughtPage from "./pages/ThoughtPage"
import NotFound from './pages/NotFound'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NotFound/>
  },
  {
    path: "/thoughts/:thoughtId",
    element: <ThoughtPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
