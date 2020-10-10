const request = require('request')
const API_KEY = process.env.DB_WEATHER_KEY


const forecast = (lat, long, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lat},${long}&units=f`


  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!')
    } else if (response.body.error) {
      callback('Unable to find location. yuh heard', undefined)
    } else {
      callback(undefined, response.body.current.weather_descriptions + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain.')
    }
  })

}

module.exports = forecast