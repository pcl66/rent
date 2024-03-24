import React, { useContext } from 'react'
import { SearchBar as SearchBarAnt } from 'antd-mobile'
import {LocationFill} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { CityProvider } from '../../../provider/CityProvider'

export default function SearchBar() {

  const nav = useNavigate()
  const { currentCity } = useContext(CityProvider)

  return (
    <div style={{
      display: 'flex',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100vw',
      padding: '20px',
      alignItems: 'center'
    }}>
      <div className='prefix' style={{
        position:'relative',
        width: '10vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height: '32px'
      }}
        onClick={() => {
          nav('/city-list')
        }}
      >
        {currentCity}
        <div style={{
          position: 'absolute',
        }}></div>
      </div>
      <SearchBarAnt style={{
        '--border-radius': '0',
        width: '72vw'
      }} placeholder='请输入小区或地址' />
      <div className='map-mark' style={{
        width: '8vw',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
        onClick={() => {
          nav('/house-find')
        }}
      >
        <LocationFill color='#fff' fontSize={25}/>
      </div>
    </div>
  )
}
