var DataStore = require( './DataStore.js' );

function Model( schema ) {
  this.schema = schema;
  this.id = null;
    for ( var key in schema ) {
      this[ key ] = null;
    }
    if( DataStore.store[ this.constructor.name ] === undefined ){
      DataStore.store[ this.constructor.name ] = [];
    }
}

Model.getNextId = function() {
  return DataStore.store[ this.name ].length + 1;
};

Model.find = function( id ) {
  console.log(DataStore.store[this.name].length);
};




module.exports = Model;