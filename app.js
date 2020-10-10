require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

inputValue = process.argv[2]

if (!inputValue) {
  return console.log('input an address')
}

geocode(inputValue, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error)
  }
  forecast(latitude, longitude, (error, forcastData) => {
    if (error) {
      return console.log(error)
    }
    console.log(location)
    console.log(forcastData)
  })
})