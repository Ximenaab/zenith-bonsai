import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Philosophy from '../pages/Philosophy'
import Gallery from '../pages/Gallery'
import Booking from '../pages/Booking'

const router = createBrowserRouter([
  { path: '/',            element: <Home /> },
  { path: '/philosophy',  element: <Philosophy /> },
  { path: '/gallery',     element: <Gallery /> },
  { path: '/booking',     element: <Booking /> },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter