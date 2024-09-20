import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Test from './components/Test/Test.jsx'
import Ai_Guidance from './components/Ai-Guidance/Ai_Guidance.jsx'
import Mentorship from './components/Mentorship/Mentorship.jsx'
import Roadmap from './components/Roadmap/Roadmap.jsx'
import Contact from './components/Contact/Contact.jsx'
import Recreation from './components/Recreation/Recreation.jsx'
import  Login  from './components/Account/Login.jsx'


// const router = createBrowserRouter ([
//   {path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path='' element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='test' element ={<Test/>}/>
      <Route path='aiguidance' element ={<Ai_Guidance/>}/>
      <Route path='mentorship' element ={<Mentorship/>}/>
      <Route path='roadmap' element ={<Roadmap/>}/>
      <Route path='recreation' element ={<Recreation/>}/>
      <Route path='contact' element ={<Contact/>}/>
      <Route path='login' element ={<Login/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
)
