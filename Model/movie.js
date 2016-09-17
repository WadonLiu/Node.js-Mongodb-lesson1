var mongoose = require('mongoose')
var MovieSchema = require('../Schemas/movies.js')

var Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie