(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('operator', {
      bindings: {
        queues: '<',
        operator: '@'
      },
      templateUrl: 'app/components/operator/operator.tpl.html',
      controller: OperatorController
    });

  OperatorController.$inject = ['QueuesService'];

  function OperatorController(QS){
    this.nextTicket = nextTicket;

    function nextTicket(queue){
      var currentNumber = queue.currentNumber;
      var totalNumbers = queue.totalNumbers;
      var nextNumber = currentNumber === totalNumbers ? 0 : currentNumber + 1;
      var remainingTickets = queue.dispatchedNumbers - 1;
      if(remainingTickets >= 0){
        QS.editQueue(queue, {currentNumber: nextNumber, dispatchedNumbers: remainingTickets});
        QS.setCurrent(queue);
      }else{
        console.log('No tickets remaining');
      }
    }
  }
})();