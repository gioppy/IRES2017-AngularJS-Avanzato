(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('admin', {
      bindings: {
        queues: '<'
      },
      templateUrl: 'app/components/admin/admin.tpl.html',
      controller: AdminController
    });

    AdminController.$inject = ['QueuesService'];

    function AdminController(QS){
      this.onNewQueue = onNewQueue;
      this.onEdit = onEdit;
      this.onDelete = onDelete;

      function onNewQueue(queue){
        QS.newQueue(queue);
      }

      function onEdit(queue){
        QS.editQueue(queue, queue);
      }

      function onDelete(queue){
        QS.deleteQueue(queue);
      }
    }
})();