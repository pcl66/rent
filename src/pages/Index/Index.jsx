import React from 'react'
import { Swiper } from 'antd-mobile'
import { useEffect } from 'react'
import { useState } from 'react'
import { getSwipers } from '../../request/indexAPI'

export default function Index() {
  const [imgs, setImgs] = useState([{id: 0, imgSrc: ''}])
  useEffect(() => {
    getSwipers().then(v => {
      setImgs(v.body)
    })
  }, [])
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className={''} style={{ background: color, height: '200px' }} onClick={() => {}}>
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  return (
    <div>
      {/* 轮播图 */}
      <div>
        <Swiper autoplay>
          {imgs.map((val, index) => {
            return (
              <Swiper.Item key={index}>
                <img src={'http://localhost:8080' + val.imgSrc} key={val.id} className={''} style={{ height: '200px', width: '100%' }} onClick={() => {}}>
                </img>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
