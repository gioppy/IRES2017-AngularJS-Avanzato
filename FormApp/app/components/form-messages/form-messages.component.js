(function(){
  'use strict';

  function FormMessagesController(){
    this.ages = [
      //{id: '', name: 'Select one...'},
      {id: '1', name: '0-15'},
      {id: '2', name: '16-25'},
      {id: '3', name: '26-50'},
      {id: '4', name: 'Oltre 50'}
    ];

    this.user = {};
    this.submitForm = submitForm;
    this.onSelectChange = onSelectChange;
    this.showOnChange = false;

    function onSelectChange(){
      this.showOnChange = this.user.age && this.user.age.id === '1' ? true : false;
    }

    function submitForm(){
      console.log(this.user);
    }
  }

  angular
    .module('formApp')
    .component('appFormMessages', {
      templateUrl: 'app/components/form-messages/form-messages.tpl.html',
      controller: FormMessagesController
    });
})();