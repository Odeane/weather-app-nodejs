require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

inputValue = process.argv[2]

if (!inputValue) {
  return console.log('input an address')
}

geocode(inputValue, (error, data) => {
  if (error) {
    return console.log(error)
  }
  forecast(data.latitude, data.longitude, (error, forcastData) => {
    if (error) {
      return console.log(error)
    }
    console.log(data.location)
    console.log(forcastData)
    
  })
})