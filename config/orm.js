var connection = require("./connection.js");

var orm = {

    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function () {
        var queryString = "INSERT INTO burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateAll: function () {
        var queryString = "INSERT INTO burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
}

module.exports = orm;