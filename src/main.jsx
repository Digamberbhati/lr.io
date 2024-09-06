import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home.jsx"
import Contact from './pages/contact.jsx'

import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>

  )
)
createRoot(document.getElementById
  ('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
