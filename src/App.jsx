import productsLoader from './loaders/productsLoader';
import Error from './pages/Error';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import './style/_layout.sass'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'


export default function App() {

  const browserRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        loader: productsLoader,
        hydrateFallbackElement: <p>Loading Products...</p>
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: productsLoader,
        hydrateFallbackElement: <p>Loading Products...</p>
      },
      {
        path: '/shop/:id',
        element: <Product />,
        loader: productsLoader,
        hydrateFallbackElement: <p>Loading Product...</p>
      },
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