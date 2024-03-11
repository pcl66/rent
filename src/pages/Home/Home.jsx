import React from 'react'
import { Outlet } from 'react-router-dom'
import ZTabBar from './ZTabBar/ZTabBar'

export default function Home() {
  return (
    <div>
      <Outlet />
      <ZTabBar />
    </div>
  )
}
