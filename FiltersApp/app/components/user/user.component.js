(function(){
  'use strict';

  angular
    .module('filtersApp')
    .component('appUser', {
      bindings: {
        name: '<'
      },
      template: '<p>{{ $ctrl.name }}</p>',
      controller: UserController
    });

  UserController.$inject = ['capitalizeatFilter'];

  function UserController(capitalizeatFilter){
    this.$onInit = function(){
      this.name = capitalizeatFilter(this.name, 3);
    };
  }
})();