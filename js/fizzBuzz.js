angular.module('fizzBuzzApp', [])
	.controller('FizzBuzzController', ['$scope', function($scope) {
		$scope.results = [];
		$scope.change = function() {
			$scope.results.push($scope.yourNumber);
			console.log($scope.results);
		};
	}]);