(function () {
    'use strict';
    
  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', ['$scope', DIController]);
  
  function DIController ($scope){

    $scope.checkDishesCount = function () {
        var dishesCount = countDishesInMenu($scope.menu);
        
        if (dishesCount == 0) 
            $scope.message = 'Please enter some data first.';
        else if (dishesCount > 0 && dishesCount <= 3)
            $scope.message = 'Bon app!';
        else $scope.message = 'Too much!';
    }

    function countDishesInMenu(string) {
        return (string != null && string.length != 0) ? string.split(',').length : 0;
    }
  }
})();