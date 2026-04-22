import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Filosofia from '../pages/Filosofia'
import Galeria from '../pages/Galeria'
import Reservas from '../pages/Reservas'

const router = createBrowserRouter([
  { path: '/',            element: <Inicio /> },
  { path: '/philosophy',  element: <Filosofia /> },
  { path: '/gallery',     element: <Galeria /> },
  { path: '/booking',     element: <Reservas /> },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
