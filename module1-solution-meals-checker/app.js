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
      result = 'Please enter data first';
    }
    else if (itemsCount <= 3) {
      result = 'Enjoy!';
    }
    else {
      result = 'Too much!';
    }


    $scope.mealsCheckerResult = result;
  }
}
})();
