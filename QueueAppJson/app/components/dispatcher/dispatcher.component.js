(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('dispatcher', {
      bindings: {
        queues: '<'
      },
      templateUrl: 'app/components/dispatcher/dispatcher.tpl.html',
      controller: DispatcherController
    });

  DispatcherController.$inject = ['QueuesService'];

  function DispatcherController(QS){
    this.onTicket = onTicket;

    function onTicket(queue){
      var dispatchedNumbers = queue.dispatchedNumbers + 1;
      QS.editQueue(queue, {dispatchedNumbers: dispatchedNumbers});
    }
  }
})();