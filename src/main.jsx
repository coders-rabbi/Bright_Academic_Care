import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)


  // < Link to = "/" > হোম</Link >
  //               <Link to="/">আমাদের সম্পর্কে</Link>
  //               <Link to="/">কোর্সসমূহ</Link>
  //               <Link to="/">শিক্ষকমন্ডলী</Link>
  //               <Link to="/">মতামত</Link>
  //               <Link to="/">সংবাদ</Link>
  //               <Link to="/">যোগাযোগ</Link>