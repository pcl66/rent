import React from 'react'
import './index.scss'
import {LeftOutline} from 'antd-mobile-icons'

export default function CityList() {
  return (
    <div className='city-list'>
      <div className='city-list-top'>
        <LeftOutline className='left-arrow'/>
        <span>城市选择</span>
      </div>
      <div className='city-list-content'></div>
    </div>
  )
}
