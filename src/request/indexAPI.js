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
