import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'


function App() {

  let routes = createBrowserRouter ([
    {path: '/' , element: <Layout></Layout> , children: [
      {index: true , element: <Home></Home>},
    ]},
    {path: '/about' , element: <About></About>},
    {path: '/portfolio' , element: <Portfolio></Portfolio>},
    {path: '/contact' , element: <Contact></Contact>},
  ])

  return (
    <>
    <RouterProvider router = {routes}></RouterProvider>
    </>
  )
}

export default App
