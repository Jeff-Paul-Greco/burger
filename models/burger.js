var orm = require("../config/orm");

var burger = {
  
    selectAll: function (cb) {

        orm.selectAll(cb);
       
    },
    
    insertOne: function (newDataObject, cb) {
        orm.insertOne(insert, cb);
    },
    
    updateOne: function (updatedDataObject, id, cb) {
        orm.updateOne(devoured, id, cb);
    }
};

module.exports = burger;