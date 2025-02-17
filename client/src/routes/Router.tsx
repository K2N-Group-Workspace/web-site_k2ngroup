import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout'
import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },

      // Ajoutez d'autres routes ici
      // {
      //   path: '/about',
      //   element: <About />
      // },
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
} 