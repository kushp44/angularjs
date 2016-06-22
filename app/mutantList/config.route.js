(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('mutantList', {
      url: '/mutantlist',
      templateUrl: 'app/mutantList/mutantList.html',
      controller: 'MutantListController',
      controllerAs: 'vm'
    });
  }
<<<<<<< HEAD
=======

>>>>>>> aa1f16492fa6b3f298609199d0d3832de5e612eb
})();
