const request = require('request')
const GEOCODE_TOKEN = process.env.DB_TOKEN

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${GEOCODE_TOKEN}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
      callback('Unable to find location.')
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}




module.exports = geocode