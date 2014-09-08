'use strict';

angular.module('harley.controllers', [])

.controller('MainController', ['$scope', 'Proof', 'Employment', function($scope, Proof, Employment){

	$scope.points = Proof.points;
	$scope.employment = Employment.history;


}])