angular.module('app.controllers')

.controller('UserController', function(dbService, Cordova, PhotoService) {
  dbService.createDB().then(dbService.updateDB("USER", "name", "bv")); 
  var photos = PhotoService.getPhotos();
  photos.then(function(data) {console.log(data);});
});