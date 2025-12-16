import historiesLoader from './loaders/historyLoader';
import productDetailsLoader from './loaders/productDetailsLoader';
import productsLoader from './loaders/productsLoader';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/FAQ'
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import './style/_layout.sass'
import { createBrowserRouter, RouterProvider } from 'react-router'


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
        loader: productDetailsLoader,
        hydrateFallbackElement: <p>Loading Product...</p>
      },
      {
        path: '/about',
        element: <About />,
        loader: historiesLoader,
        hydrateFallbackElement: <p>Loading Histories...</p>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '*',
        element: <Error />
      }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  )
}