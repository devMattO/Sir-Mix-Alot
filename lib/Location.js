var Model = require( './Model.js' );

var locationSchema = {
  lng: Number,
  lat: Number
};

function Location() {
  Model.call( this, locationSchema );
}

Model.extend( Location );

module.exports = Location;