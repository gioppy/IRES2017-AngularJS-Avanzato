(function(){
  'use strict';

  angular
    .module('ReorderApp')
    .component('appList', {
      templateUrl: 'app/components/list/list.tpl.html',
      controller: ListController
    });

  function ListController(){
    this.models = {
      selected: null,
      lists: {
        'A': [],
        'B': []
      }
    };

    this.$onInit = function(){
      for(var i = 0; i <= 3; i++){
        this.models.lists.A.push({label: 'Item A' + i});
        this.models.lists.B.push({label: 'Item B' + i});
      }
    };
  }
})();