import React from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {  useNavigate, useLocation } from 'react-router-dom'
import { AppOutline, MessageOutline, SearchOutline, UserOutline } from 'antd-mobile-icons'

export default function ZTabBar() {
  const tabs = [
    {
      key: '/home/index',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: '/todo',
      title: '找房',
      icon: <SearchOutline />
    },
    {
      key: '/message',
      title: '资讯',
      icon: <MessageOutline />
    },
    {
      key: '/home/my',
      title: '我的',
      icon: <UserOutline />
    }
  ]
  const history = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = value => {
    history(value)
  }

  return (
    <TabBar style={{position: 'fixed', bottom: '0px', left: '0px', width: '100%'}} activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}
