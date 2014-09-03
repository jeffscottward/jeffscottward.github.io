'use strict';

angular.module('jeffscottwardWebsite')
  .controller('HomeCtrl', function ($scope) {
    $scope.currentTab = 'about';

    $scope.getCurrentTab = function (tab){
      return $scope.currentTab;
    }
    $scope.setCurrentTab = function (tab){
      $scope.currentTab = tab;     
    }
    $scope.isCurrentTab = function (tab){
      if($scope.currentTab === tab){
        return true;
      }
    }
    $scope.processForm = function(data){
      alert(formData);
    }
  });
