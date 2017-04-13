(function(){
  'use strict';

  angular
    .module('filtersApp')
    .filter('capitalizeat', CapitalizeAtFilter);

  function CapitalizeAtFilter(){
    return function(input, char){
      if(isNaN(input)){
        var charPos = char - 1 || 0;
        var uppercaseLetter = input.charAt(charPos).toUpperCase();
        var output = [];

        for(var i = 0; i < input.length; i++){
          if(i === charPos){
            output.push(uppercaseLetter);
          }else{
            output.push(input[i]);
          }
        }

        return output.join('');
      }else{
        return input;
      }
    };
  }
})();