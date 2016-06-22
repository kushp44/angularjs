(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'app/auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
<<<<<<< HEAD
=======
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
>>>>>>> aa1f16492fa6b3f298609199d0d3832de5e612eb
  }
})();
