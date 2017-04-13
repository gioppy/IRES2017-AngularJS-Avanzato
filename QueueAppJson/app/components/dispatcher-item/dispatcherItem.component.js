(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('dispatcherItem', {
      bindings: {
        data: '<',
        isAdmin: '<',
        isOperator: '<',
        onNext: '&',
        onTicket: '&',
        onEdit: '&',
        onDelete: '&'
      },
      templateUrl: 'app/components/dispatcher-item/dispatcherItem.tpl.html',
      controller: DispatcherItem
    });

  function DispatcherItem(){
    this.admin = false;
    this.operator = false;
    this.editDelete = false;
    this.editQueue = false;
    this.deleteQueue = false;

    this.getTicket = getTicket;
    this.handleNextTicket = handleNextTicket;
    this.handleGetTicket = handleGetTicket;
    this.editTicket = editTicket;
    this.deleteTicket = deleteTicket;
    this.discardEditTicket = discardEditTicket;
    this.handleEditQueue = handleEditQueue;

    this.$onChanges = function(changesObj){
      this.admin = changesObj.isAdmin.currentValue;
      this.operator = changesObj.isOperator.currentValue;
    };

    var setEdit = function(visible){
      visible = visible || false;

      this.editDelete = visible;
      this.editQueue = visible;
    }.bind(this);

    function getTicket(id){
      console.log('Get Ticket for queue ' + id);
    }

    function handleNextTicket(queue){
      this.onNext({$queue: queue});
    }

    function handleGetTicket(queue){
      this.onTicket({$queue: queue});
    }

    function editTicket(){
      setEdit(true);
    }

    function deleteTicket(queue){
      this.onDelete({$queue: queue});
    }

    function discardEditTicket(){
      setEdit();
    }

    function handleEditQueue(queue){
      this.onEdit({$queue: queue});
      setEdit();
    }
  }
})();