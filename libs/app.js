(function() {
  'use strict';

  angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function() {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      };
    })


  //************ Assignment 1 Code********************//
  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.noOfItems = 0;
    $scope.color = {};
    $scope.border = {};
    var string = "";


    $scope.calculate = function(string) {
      var count = 0;
      if (string) {
        $scope.noOfItems = string.split(',');
        for (var i = 0; i < $scope.noOfItems.length; i++) {
          if ($scope.noOfItems[i]) {
            count++; //handling case of multiple ',,' consecutively
          }
        }
        $scope.noOfItems = count;
        console.log($scope.noOfItems);
      }
      $scope.msg = displayMessage();
      $scope.noOfItems = 0;
    };

    function displayMessage() {
      $scope.color = {
        "color": 'green'
      };
      $scope.border = {
        "border-color": "green"
      };
      if ($scope.noOfItems <= 3 && $scope.noOfItems > 0) {
        return ("Enjoy!");
      } else if ($scope.noOfItems > 3) {
        return ("Too much!");
      } else {
        $scope.color = {
          "color": 'red'
        };
        $scope.border = {
          "border-color": "red"
        };
        return ("Please enter the data first");
      }
    }
  }

})();
