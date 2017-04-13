(function(){
  'use strict';

  angular
    .module('MyApp')
    .component('appForm', {
      templateUrl: 'app/components/form/form.tpl.html',
      controller: FormController
    });

  function FormController(){
    this.$onInit = function(){
      this.data = {};

      this.textfield = {
        type: 'text',
        name: 'username',
        model: 'username',
        validators: {
          required: true,
          minlength: 3
        },
        errorMessages: {
          required: 'This field is required',
          minlength: 'The text must be greater than 3 characters'
        }
      };

      this.otherTextfield = {
        type: 'text',
        name: 'firstname',
        model: 'firstname',
        validators: {
          maxlength: 10
        },
        errorMessages: {
          maxlength: 'The Firstname cannot be too large'
        }
      };

      this.textarea = {
        type: 'textarea',
        name: 'comment',
        model: 'comment',
        validators: {
          required: true
        },
        errorMessages: {
          required: 'You must insert a comment'
        }
      };
    };

    this.submit = submit;

    function submit(){
      console.log(this.data);
    }
  }
})();