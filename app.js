const request = require('request')
require('dotenv').config()
const API_KEY = process.env.DB_KEY


const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233&units=f`

request({ url: url, json:true }, (error, response) => {
  console.log(response.body.current)
  console.log(`It is currrently ${response.body.current.temperature} but it feels like ${response.body.current.feelslike}`)
})