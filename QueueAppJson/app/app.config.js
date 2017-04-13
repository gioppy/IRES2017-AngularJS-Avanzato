(function(){
  'use strict';

  angular
    .module('QueueApp')
    .config(Config);

  Config.$inject = ['$compileProvider', '$routeProvider'];

  function Config($compileProvider, $routeProvider){
    $routeProvider
      .when('/', {
        template: '<dispatcher queues="$resolve.queues"></dispatcher>',
        resolve: {
          queues: ['QueuesService', function(QS){
            return QS.getQueues();
          }]
        }
      })
      .when('/admin', {
        template: '<admin queues="$resolve.queues"></admin>',
        resolve: {
          queues: ['QueuesService', function(QS){
            return QS.getQueues();
          }]
        }
      })
      .when('/operator/:id', {
        template: '<operator queues="$resolve.queues" operator="{{$resolve.operator}}"></operator>',
        resolve: {
          queues: ['QueuesService', '$route', function(QS, $route){
            var id = $route.current.params.id;
            return QS.getOperatorQueues(id);
          }],
          operator: ['$route', function($route){
            return $route.current.params.id;
          }]
        }
      })
      .when('/display', {
        template: '<display current="$resolve.current"></display>',
        resolve: {
          current: ['QueuesService', function(QS){
            return QS.getCurrent();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();