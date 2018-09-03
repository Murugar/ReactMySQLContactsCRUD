"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var privates = require('../config/privates');
exports.seedData = function (connection) {
    connection.query("CREATE DATABASE " + privates.mysqlDatabase, function (err) {
        if (err) {
            console.log("Warning: Database " + privates.mysqlDatabase + " already exists.");
        }
        else {
            console.log('Database created.');
        }
        connection.query("USE " + privates.mysqlDatabase, function (err) {
            if (err)
                throw err;
            console.log("Using " + privates.mysqlDatabase + " database.");
            var createTableQuery = "CREATE TABLE records (\n        id INT(11) NOT NULL AUTO_INCREMENT,\n        first_name VARCHAR(20) NOT NULL,\n        last_name VARCHAR(20) NOT NULL,\n        phone_number VARCHAR(20) NOT NULL,\n        PRIMARY KEY (id)\n      )";
            connection.query(createTableQuery, function (err) {
                if (err) {
                    console.log('Warning: Table records already exists.');
                }
                else {
                    console.log('Table \'records\' created.');
                    var insertRowsQuery = "INSERT INTO records (\n            first_name,\n            last_name,\n            phone_number\n          ) VALUES ?";
                    var values = [
                        ['Torri', 'Master', '573-276-6279'],
                        ['Monika', 'Eyer', '830-893-4540'],
                        ['Demetra', 'Hites', '202-216-9185'],
                        ['France', 'Hyder', '289-274-2204'],
                        ['Kati', 'Savidge', '417-469-1011'],
                        ['Cornelia', 'Alaniz', '510-813-8686'],
                        ['Berry', 'Mellish', '325-899-2450'],
                        ['Sabine', 'Wahlen', '432-741-1289'],
                        ['Lia', 'Risher', '213-507-4592'],
                        ['Roman', 'Lastrapes', '601-596-5563'],
                    ];
                    connection.query(insertRowsQuery, [values], function (err, result) {
                        if (err)
                            throw err;
                        console.log(result.affectedRows + " rows created.");
                    });
                }
            });
        });
    });
};
