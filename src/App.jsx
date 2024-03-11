import { useState } from 'react'
import './App.css'
import {Button} from 'antd-mobile'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import CityList from './pages/CityList/CityList';
import My from './pages/My/My';
import Index from './pages/Index/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home/index'/>
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: 'index',
        element: <Index />
      },
      {
        path: 'my',
        element: <My />
      }
    ]
  },
  {
    path: '/city-list',
    element: <CityList />
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
