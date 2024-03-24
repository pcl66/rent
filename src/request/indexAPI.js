import { cities } from "../const"
import { instance } from "./axios"

export const getSwipers = () => new Promise((resolve, reject) => {
  instance.get('/home/swiper').then(v => {
    resolve(v.data)
  })
})

export const getRentGroup = (area) => new Promise((resolve, reject) => {
  instance.get('/home/groups', {params: {area}}).then(v => {
    resolve(v.data)
  })
})

export const getNews = (area) => new Promise((resolve, reject) => {
  instance.get('/home/news', {params: {area}}).then(v => {
    resolve(v.data)
  })
})

export const getCityList = () => new Promise((resolve, reject) => {
  instance.get('/area/city', {params: {level: 1}}).then(v => {
    resolve(v.data)
  })
})

export const getHouseInfo = (id) => new Promise((resolve, reject) => {
  console.log({id})
  instance.get('/area/map', {params: {id}}).then(v => {
    resolve(v.data)
  })
})

export const getAreaByName = (name) => new Promise((resolve, reject) => {
  instance.get('/area/info', {params: {name}}).then(v => {
    resolve(v.data)
  })
})

export const getGeoInfoByName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cities[name])
  }, 1000)
})