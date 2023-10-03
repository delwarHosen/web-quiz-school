import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Main from './components/Main/Main.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ShowQuizeDetails from './components/ShowQuizeDetails/ShowQuizeDetails'
import Statistics from './components/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: '/quiz/:quizId',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <ShowQuizeDetails></ShowQuizeDetails>
      },
      {
        path: '/statistic',
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
