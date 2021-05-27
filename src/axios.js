import Axios from 'axios'

const axios = Axios.create({
  // baseURL: 'https://classi-ba5or.ondigitalocean.app/',
  baseURL: 'https://classibackend.herokuapp.com/',
  // baseURL: 'http://localhost:3000/',
  timeout: 10000
})

export default axios
