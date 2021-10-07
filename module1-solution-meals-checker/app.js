(function() {
'use strict';

let app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', mealsCheckerController)

mealsCheckerController.$injector = ['$scope'];
function mealsCheckerController($scope) {
  $scope.mealsCheckerResult = '';
  $scope.meals = '';
  $scope.displayMealsCheckerResult = function() {
    let result = '', itemsCount = 0;
    let splitMeals = $scope.meals.split(',');

    for (let i = 0; i < splitMeals.length; i++)
      if (splitMeals[i].trim() != '')
        itemsCount++;

    if (itemsCount == 0) {
      $scope.colorCode = 1;
      result = 'Please enter data first';
    }
    else if (itemsCount <= 3) {
      $scope.colorCode = 2;
      result = 'Enjoy!';
    }
    else {
      $scope.colorCode = 3;
      result = 'Too much!';
    }


    $scope.mealsCheckerResult = result;
  }
}
})();
