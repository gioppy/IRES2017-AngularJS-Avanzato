(function(){
  'use strict';

  angular
    .module('filtersApp')
    .filter('ordinal', OrdinalFilter);

  function OrdinalFilter(){
    return function(input){
      if(isNaN(input) || input < 1){
        return input;
      }else{
        var lastDigit = input % 10;
        var ordinal = 'th';

        switch(lastDigit){
          case 1:
            ordinal = 'st';
            break;

          case 2:
            ordinal = 'nd';
            break;

          case 3:
            ordinal = 'rd';
            break;
        }

        return input + ordinal;
      }
    };
  }
})();