const path = require('path')

module.exports = {
    sassOptions: {
        includePath: [path.join(__dirname, 'styles')]
    },
    env: {
        googleMapKey: 'AIzaSyB3EkGRUsuzb8JflnVg_v8wy2bamHZGGkI'
    }
}