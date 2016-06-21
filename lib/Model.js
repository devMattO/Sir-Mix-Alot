var DataStore = require( './DataStore.js' );

function extend( destination, source ) {
  for( var k in source ) {
    if( source.hasOwnProperty( k ) ) {
      destination[ k ] = source[ k ];
    }
  }
  return destination;
}

function Model( schema ) {
  this.schema = schema;
  this.id = null;
    for( var key in schema ) {
      this[ key ] = null;
    }
    if( DataStore.store[ this.constructor.name ] === undefined ) {
      DataStore.store[ this.constructor.name ] = [];
    }
}

Model.getNextId = function() {
  return DataStore.store[ this.name ].length + 1;
};

Model.find = function( id ) {
  for( var i = 0; i < DataStore.store[ this.name ].length; i++ ) {
    if( DataStore.store[ this.name ][ i ].id === id ) {
      return DataStore.store[ this.name ][ i ];
    }
  }
  return null;
};

Model.prototype.save = function() {
  if( this.id === null ) {
    this.id = this.constructor.getNextId();
    DataStore.store[ this.constructor.name ].push( this );
  }
};

Model.prototype.destroy = function() {
  if( this.id !== null ) {
    this.id = null;
  }
};

 Model.extend = function( klass ) {
  extend( klass.prototype, Model.prototype );
  extend( klass, Model );
 };


module.exports = Model;