import React, { useRef } from 'react'
import { Swiper } from 'antd-mobile'
import { useEffect } from 'react'
import { useState } from 'react'
import { getNews, getRentGroup, getSwipers } from '../../request/indexAPI'
import SearchBar from './components/SearchBar'
import './index.scss'
import img1 from './images/nav-1.png'
import img2 from './images/nav-2.png'
import img3 from './images/nav-3.png'
import img4 from './images/nav-4.png'

export default function Index() {
  const [imgs, setImgs] = useState([{id: 0, imgSrc: ''}])
  const [groupInfos, setGroupInfos] = useState([])
  const [news, setNews] = useState([])
  const swiperRef = useRef(null)
  useEffect(() => {
    getSwipers().then(v => {
      setImgs(v.body)
    })
    getRentGroup('AREA%7C88cff55c-aaa4-e2e0').then(v => {
      console.log(v)
      setGroupInfos(v.body)
    })
    getNews('AREA%7C88cff55c-aaa4-e2e0').then(v => {
      setNews(v.body)
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
      {/* search bar */}
      <SearchBar />
      {/* 轮播图 */}
      <div>
        <Swiper
          ref={swiperRef}
          autoplay
          indicator={
            (total, current) => {
              const items = Array.from({length: total}).map((_, i) => i)
              const hClick = (index) => {
                swiperRef.current.swipeTo(index)
              }
              const dot = (index) => <span onClick={ () => hClick(index)} key={index}>-</span>
              const activeDot =(index) => <span onClick={ () => hClick(index)} key={index}>*</span>
              return (
                <div className='indicator'>
                  {items.map((v, i) => v === current ? dot(v) : activeDot(v))}
                </div>
              )
            }
          }
        >
          {imgs.map((val, index) => {
            return (
              <Swiper.Item key={index}>
                <img src={'http://localhost:8080' + val.imgSrc} key={val.id} className={''} style={{ height: '212px', width: '100%' }} onClick={() => {}}>
                </img>
              </Swiper.Item>
            )
          })}
        </Swiper>
      </div>
      {/* 导航菜单 */}
      <div className='nav'>
          <div className='nav-item'>
            <img src={img1} alt="" />
            <span>整租</span>
          </div>
          <div className='nav-item'>
            <img src={img2} alt="" />
            <span>合租</span>
          </div>
          <div className='nav-item'>
            <img src={img3} alt="" />
            <span>地图找房</span>
          </div>
          <div className='nav-item'>
            <img src={img4} alt="" />
            <span>去出租</span>
          </div>
      </div>

      {/* 租房小组 */}
      <div className='rent-group'>
        <div className='rent-group-head'>
          <span>租房小组</span>
          <span>更多</span>
        </div>
        <div className='rent-group-content'>
          {groupInfos.map(v => {
            return (
              <div key={v.id} className='group-card'>
                <div className='group-card-left'>
                  <span>{v.title}</span>
                  <span>{v.desc}</span>
                </div>
                <img className='group-card-right' src={`http://localhost:8080${v.imgSrc}`}></img>
              </div>
            )
          })}
        </div>
      </div>

      {/* 咨询 */}
      <div className='rent-consult'>
          <div className='consult-head'>
            <span>咨询</span>
            <span>更多</span>
          </div>
          <div className='consult-content'>
            {
              news.map(v => {
                return (
                  <div key={v.id} className='consult-item'>
                    <img src={`http://localhost:8080${v.imgSrc}`} alt="" />
                    <div className='consult-item-right'>
                      <span className='consult-item-right-title'>{v.title}</span>
                      <span className='consult-item-right-bottom'>
                        <span>{v.from}</span>
                        <span>{v.date}</span>
                      </span>
                    </div>
                    </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}
