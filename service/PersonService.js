'use strict';
var ls = require('local-storage');
var uuid = require('uuid');

/**
 * Person object that needs to be added.
 * returns ApiResponse
 **/
exports.addPerson = function(body) {
  let personData = {
    id: uuid.v4(),
    name: body.name,
    age: body.age,
    locale: body.locale
  };
  ls.set(personData.id, personData);
  return new Promise(function(resolve, reject) {
    resolve(personData),
    reject('Unable to add person data to local storage')
  });
}


/**
 * Deletes a person
 * dataId Long Person id to delete
 * returns ApiResponse
 **/
exports.deletePerson = function(dataId) {
  let personData = ls.get(dataId);
  if(personData){
    ls.remove(dataId);
  }
  return new Promise(function(resolve, reject) {
    if(personData !== null){
      resolve(personData);
    } else {
      reject(res.status(404));
    }
  });
}


/**
 * Find person by ID
 * Returns a single person information
 *
 * dataId Long ID of person to return
 * returns Person
 **/
exports.getPersonById = function(dataId) {
  let personData = ls.get(dataId);
  return new Promise(function(resolve, reject) {
    if(personData !== null) {
      resolve(personData);
    } else
      reject(res.status(404));
  });
}

