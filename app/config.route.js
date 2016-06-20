(function () {
  'use strict';

  angular
    .module('mutantApp.home')
    .config(configFunction);

configFunction.$inject = ['$stateProvider'];

function configFunction($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    // CHECK temp URL
    templateUrl: 'app/home/home.hmtl'
  })
}
})
