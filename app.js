const request = require('request')
require('dotenv').config()
const API_KEY = process.env.DB_KEY


const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233`

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})