var DataStore = require('./DataStore.js');

function Model( schema ) {
  this.schema = schema;
  this.id = null;
    for (var key in schema) {
      this[key] = null;
    }
    if(DataStore.store[this.constructor.name] === undefined){
      DataStore.store[this.constructor.name] = [];
    }
}

Model.getNextId = function(){
  return DataStore.store[this.name].length + 1;
};

Model.find = function( id ){
  for(var i = 0; i < Datastore.store[this.name].length; i++) {
  if(Datastore.store[this.name][i].id === id) {
    return Datastore.store[this.name][i];
  }
}
return null;
};





module.exports = Model;