(function(){
  'use strict';

  angular
    .module('MyApp')
    .component('fieldForm', {
      templateUrl: 'app/components/field/form-field.tpl.html',
      bindings: {
        errors: '<',
        settings: '<',
        model: '<'
      }
    });
})();