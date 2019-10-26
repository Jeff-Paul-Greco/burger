var connection = require("./connection.js");

var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (insert, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, [insert], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateAll: function (devoured, id, cb) {
        var queryString = "UPDATE burgers SET ? WHERE id = ?";
        connection.query(queryString, [devoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
}

module.exports = orm;