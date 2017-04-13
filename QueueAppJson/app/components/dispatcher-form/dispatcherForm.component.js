(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('dispatcherForm', {
      templateUrl: 'app/components/dispatcher-form/dispatcher-form.tpl.html',
      bindings: {
        onNewQueue: '&'
      },
      controller: DispatcherFormController
    });

  function DispatcherFormController(){
    this.handleNewQueue = handleNewQueue;
    this.queue = {
      currentNumber: 0,
      dispatchedNumbers: 0
    };

    function handleNewQueue(){
      this.onNewQueue({$queue: this.queue});
      this.queue = {
        currentNumber: 0,
        dispatchedNumbers: 0
      };
    }
  }
})();