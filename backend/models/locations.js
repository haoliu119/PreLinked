var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  zipcode:    String,
  state_abbr: String,
  geo: {type: [Number], index: '2d'}
  city:   String,
  state:  String
});

module.exports = mongoose.model('Location', locationSchema);

/*
http://java.dzone.com/articles/geospatial-queries-mongoose
{
  zipcode: "07946",
  state_abbr: "NJ",
  latitude: "40.672823",
  longitude: "-74.52011",
  city: "Millington",
  state: "New Jersey"
}
*/