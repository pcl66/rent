import React from 'react'
import { SearchBar as SearchBarAnt } from 'antd-mobile'
import {LocationFill} from 'antd-mobile-icons'

export default function SearchBar() {
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
      }}>
        上海
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
      }}>
        <LocationFill fontSize={25}/>
      </div>
    </div>
  )
}
