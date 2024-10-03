import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Hero from './components/hero.jsx'
import Projetos from './components/projetos.jsx'
import Contato from './components/contato.jsx'
import PageNotFound from './pages/pagenotfound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <Hero/> },
      { path: '/projetos', element: <Projetos/> },
      { path: '/projetos/:id', element: <Projetos/> },
      { path: '/contato', element: <Contato/> },
      { path: '/contato/:id', element: <Contato/> },
      { path: '*', element: <PageNotFound/> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
