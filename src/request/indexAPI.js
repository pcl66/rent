import { instance } from "./axios"

export const getSwipers = () => new Promise((resolve, reject) => {
  instance.get('/home/swiper').then(v => {
    resolve(v.data)
  })
})
