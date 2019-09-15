'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.addPerson = function addPerson (req, res, next) {
  var body = req.swagger.params['body'].value;
  Person.addPerson(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePerson = function deletePerson (req, res, next) {
  var dataId = req.swagger.params['dataId'].value;
  Person.deletePerson(dataId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.getPersonById = function getPersonById (req, res, next) {
  var dataId = req.swagger.params['dataId'].value;
  Person.getPersonById(dataId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
