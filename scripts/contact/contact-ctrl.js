'use strict';

angular.module('jeffscottwardWebsite')
  .controller('ContactCtrl', function ($scope) {
      
      // Data obj to store
      $scope.formData = {};
      
      //Submit form to back end
      $scope.processForm = function() {
        alert('valid form!\n' + JSON.stringify($scope.formData, null, '\t'))
        /*
        $http({
          method  : 'POST',
          url     : 'process.php',
          data    : $scope.formData,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        */
      };
  });
