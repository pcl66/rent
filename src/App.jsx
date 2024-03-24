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
import FindHouse from './pages/FindHouse/FindHouse';
import { CityProvider } from './provider/CityProvider';

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
  },
  {
    path: '/house-find',
    element: <FindHouse />
  }
]);

function App() {
  const [count, setCount] = useState(0)
  const [currentCity, setCurrentCity] = useState('上海')

  return (
    <>
    <CityProvider.Provider value={{currentCity, setCurrentCity}}>
      <RouterProvider router={router} />
    </CityProvider.Provider>
    </>
  )
}

export default App
