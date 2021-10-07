(function() {
'use strict';

function numericCalculator(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++)
    result += string.charCodeAt(i);
  return result;
}
console.log(numericCalculator(""));

angular.module("myApp", [])
.controller("myCtrl", function($scope) {
	$scope.name = '';
  $scope.calculatedResult = 0;
  $scope.displayResult = function () {
    $scope.calculatedResult = numericCalculator($scope.name);
  }

});

})();
