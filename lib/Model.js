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
  this.getNextId = function(){

  };
}










module.exports = Model;