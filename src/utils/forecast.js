const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=6fffc99deb7f2ee59b1b7ca4a904f7ac&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Try another search', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`)
        }    
    })
}

module.exports = forecast