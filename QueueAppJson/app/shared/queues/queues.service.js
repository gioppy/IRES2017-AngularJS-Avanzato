(function(){
  'use strict';

  angular
    .module('QueueApp')
    .service('QueuesService', QueuesService);

  QueuesService.$inject = ['filterFilter', '$http'];

  function QueuesService(filterFilter, $http){
    var queues = [];
    var current;

    this.getQueues = getQueues;
    this.getCurrent = getCurrent;
    this.setCurrent = setCurrent;
    this.getOperatorQueues = getOperatorQueues;
    this.newQueue = newQueue;
    this.editQueue = editQueue;
    this.deleteQueue = deleteQueue;

    function getQueues(){
      return $http({
        method: 'GET',
        url: 'http://localhost:3002/queues'
      }).then(function(response){
        queues = response.data;
        return queues;
      }, function(error){
        console.log(error);
      });
    }

    function getQueueById(id){
      return $http({
        method: 'GET',
        url: 'http://localhost:3002/queues/' + id
      }).then(function(response){
        return response.data;
      }, function(error){
        console.log(error);
      });
    }

    function getCurrent(){
      return $http({
        method: 'GET',
        url: 'http://localhost:3002/current'
      }).then(function(response){
        return getQueueById(response.data.id);
      }, function(error){
        console.log(error);
      }).then(function(response){
        current = response;
        return current;
      });
    }

    function setCurrent(queue){
      return $http({
        method: 'PUT',
        url: 'http://localhost:3002/current',
        data: {id: queue.id}
      }).then(function(response){
        return response.data;
      }, function(error){
        console.log(error);
      });
    }

    function getOperatorQueues(id){
      return $http({
        method: 'GET',
        url: 'http://localhost:3002/queues?operator=' + id
      }).then(function(response){
        queues = response.data;
        return queues;
      }, function(error){
        console.log(error);
      });
    }

    function newQueue(queue){
      console.log(queue);
      return $http({
        method: 'POST',
        url: 'http://localhost:3002/queues',
        data: queue
      }).then(function(response){
        queues.push(response.data);
        return queues;
      }, function(error){
        console.log(error);
      });
    }

    function editQueue(queue, newValues){
      var data = angular.merge(queue, newValues);
      return $http({
        method: 'PUT',
        url: 'http://localhost:3002/queues/' + queue.id,
        data: data
      }).then(function(response){
        return response.data;
      }, function(error){
        console.log(error);
      });
    }

    function deleteQueue(queue){
      return $http({
        method: 'DELETE',
        url: 'http://localhost:3002/queues/' + queue.id,
        data: queue
      }).then(function(response){
        if(queues.indexOf(queue) !== -1){
          var index = queues.indexOf(queue);
          queues.splice(index, 1);
        }
        return queues;
      }, function(error){
        console.log(error);
      });
    }
  }
})();