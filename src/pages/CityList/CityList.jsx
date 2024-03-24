import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import {LeftOutline} from 'antd-mobile-icons'
import {SpinLoading} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getCityList } from '../../request/indexAPI'
import { letters } from './const'
import { CityProvider } from '../../provider/CityProvider'

export default function CityList() {
  const nav = useNavigate()
  const [cityList, setCityList] = useState([])
  const [loading, setLoading] = useState(false)
  const { setCurrentCity } = useContext(CityProvider)

  useEffect(() => {
    setLoading(true)
    getCityList().then(v => {
      const rawList = v.body
      const cityListGroup = letters.map(v => {
        return {
          letter: v,
          cityList: rawList.filter(val => val.pinyin.startsWith(v))
        }
      })
      setCityList(cityListGroup)
      setLoading(false)
    })
  }, [])
  return (
    <div className='city-list'>
      <div className='city-list-top'>
        <LeftOutline onClick={() => { nav('/home/index') }} className='left-arrow'/>
        <span>城市选择</span>
      </div>
      {
        loading ? <SpinLoading style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} color='default' /> : (
          <div className='city-list-content'>
            {
              cityList.filter(val => val.cityList.length > 0).map(v => {
                return (
                  <div className='city-list-content-item' id={v.letter} key={v.letter}>
                    <div className='city-list-content-item-letter'>{v.letter.toLocaleUpperCase()}</div>
                    <div className='city-list-content-item-city-list'>
                      {
                        v.cityList.map(v => {
                          return (
                            <div className='city-list-content-item-city-list-item' key={v.value} onClick={() => { setCurrentCity(v.label); nav('/home/index') }}>
                              <span className='city-list-content-item-city-list-item-label'>{v.label}</span>
                            </div>
                            )
                            })
                      }
                    </div>
                    <div className='city-list-content-item-line'/>
                    <div className='city-list-content-item-line'/>
                  </div>)
              })
            }
          </div>
        )
      }
      {/* 字母表 */}
      <div className='right-dot'>
        {
          cityList.filter(val => val.cityList.length > 0).map(v => {
            return (
              <div className='right-dot-item' key={v.letter} onClick={() => {
                document.getElementById(v.letter)?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>{v.letter.toLocaleUpperCase()}</div>
            )
          })
        }
      </div>
    </div>
  )
}
