import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BOF from './blogs/bof.tsx'
import Pipelining from './blogs/pipelining.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/' element={<App/>}/>
      <Route path='/blog_stepper' element={<BOF/>}/>
      <Route path='/blog_pipelining' element={<Pipelining/>}/>
    </Route>,
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
