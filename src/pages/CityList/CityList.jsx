import React from 'react'
import './index.scss'
import {LeftOutline} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function CityList() {
  const nav = useNavigate()
  return (
    <div className='city-list'>
      <div className='city-list-top'>
        <LeftOutline onClick={() => { nav('/home/index') }} className='left-arrow'/>
        <span>城市选择</span>
      </div>
      <div className='city-list-content'></div>
    </div>
  )
}
