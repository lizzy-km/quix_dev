import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import { Skills } from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>There was an error</div>,
      children: [
        {
          path: 'home', element: <Home />,
          index: true

        },
         {
          path: 'about', element: <About />,

        },
        {
          path: 'skills', element: <Skills />,

        },
        {
          path: 'projects', element: <Projects />,

        },
        {
          path: 'contact', element: <Contact />,

        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)
  return (
    <RouterProvider router={router} />
  )
}

export default App
