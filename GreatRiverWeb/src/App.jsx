import Home from './pages/Home'
import Services from './pages/services'
import About from './pages/aboutus'
import Header from './headers/header'
import Footer from './footer/footer'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([{
  path:"/",
  element: (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/aboutus',
      element: <About />
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
