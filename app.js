const request = require('request')
require('dotenv').config()
const API_KEY = process.env.DB_WEATHER_KEY
const geocode = require('./utils/geocode')

// const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233&units=f`

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//    console.log('Unable to connect to weather service!')
//   } else if(response.body.error) {
//     console.log('Unable to find location')
//   }else {
//     console.log(` ${response.body.current.weather_descriptions[0]}. It is currrently ${response.body.current.temperature} but it feels like ${response.body.current.feelslike}`)
//  }
// })


// const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${GEOCODE_TOKEN}`

// request({ url: geocodeURL, json: true, }, (error, response) => {

//   if (error) {
//     console.log('Unable to connect to location services!')
//   } else if (response.body.error.length === 0) {
//     console.log('Unable to find location')
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude,longitude)
//   }
// })

geocode('boston', (error, data) => {
  console.log('error', error)
  console.log("Data", data)
})