import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import NavBars from './components/NavBars.tsx'
import Footers from './components/Footers.tsx'
import MainNavbar from './components/Navbar/MainNavbar.tsx'

const Layout = () => {
  return (
    <div>
      <MainNavbar/>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/navbars",
        element: <NavBars />,
      },
      {
        path: "/footers",
        element: <Footers />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
