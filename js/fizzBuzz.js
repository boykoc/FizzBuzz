angular.module('fizzBuzzApp', [])
	.controller('FizzBuzzController', ['$scope', function($scope) {
		$scope.change = function() {
			$scope.results = []; // reset results array each change
			for (var i = 1; i <= $scope.yourNumber; i++) {
				if (i%3 == 0 && i%5 == 0) {
					$scope.results.push("FizzBuzz");
				} else if (i%3 == 0) {
					$scope.results.push("Fizz");
				} else if (i%5 == 0) {
					$scope.results.push("Buzz");
				} else {
					$scope.results.push(i);
				}				
			};
		};
	}]);