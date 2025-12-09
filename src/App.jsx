import Error from './pages/Error';
import Home from './pages/Home';
import './style/_layout.sass'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'


export default function App() {

  const browserRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home />
      },
      // {
      //   path: '/shop',
      //   element: <Products />
      // },
      // {
      //   path: '/shop/:id',
      //   element: <Product />
      // },
      // {
      //   path: '/about',
      //   element: <About />
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />
      // },
      {
        path: '*',
        element: <Error />
      }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  )
}