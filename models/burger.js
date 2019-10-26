var orm = require("../config/orm");

var burger = {
  
    //passing callback function to orm
    selectAll: function (cb) {

        orm.selectAll(cb);
       
    },
    
    //passing argument(s) for query and callback functions to orm in the following two 
    insertOne: function (insert, cb) {
        orm.insertOne(insert, cb);
    },
    
    updateOne: function (devoured, id, cb) {
        orm.updateOne(devoured, id, cb);
    }
};

module.exports = burger;