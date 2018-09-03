"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRecords_1 = require("./getRecords");
exports.deleteRecord = function (connection, req, res) {
    var query = "DELETE FROM records WHERE id = " + req.query.id;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).end();
        }
        else {
            console.log(result.affectedRows + " rows deleted.");
            getRecords_1.getRecords(connection, res);
        }
    });
};
