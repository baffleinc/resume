'use strict';

angular.module('harley.controllers', [])

.controller('MainController', ['$scope', '$document', '$window', '$modal', 'Proof', 'Employment', 'Skills', 'Education', function($scope, $document, $window, $modal, Proof, Employment, Skills, Education){

	// FILL SCOPE WITH MY AWESOMENESS //
	$scope.points = Proof.points;
	$scope.employment = Employment.history;
	$scope.skills = Skills.skills;
	$scope.education = Education.education;

	// COOL SCROLLY MENU BAR INTERACTIONS //
	$scope.showBar = false; // for position of nav bar
	$scope.barVisible = false; // for opacity of nav bar

	var previousScroll = 0;
	var windowHeight = $window.innerHeight;

	$document.on('scroll', function(){
		var scrollPos = $document.scrollTop();

		if(scrollPos < windowHeight) $scope.showBar = true; // past 2nd section
		else if(previousScroll < scrollPos) $scope.showBar = false; // scrolling down
		else $scope.showBar = true; // scrolling up

		if(scrollPos > 44) $scope.barVisible = true; // at start of page
		else $scope.barVisible = false; // scrolling

		previousScroll = scrollPos;
		$scope.$apply();
	});

	// OPEN THE MENU //
	$scope.menuOpen = false;

	$scope.toggleMenu = function(){
		$scope.menuOpen = !$scope.menuOpen;
	};

	// TO THE TOP PLS! //
	$scope.toTheTop = function(){ $document.scrollTo(0, 0, 1000); }


	// JOB MODALS //
	$scope.showJob = function(object){
		console.log(object);	
		$modal.open({
			templateUrl: 'template/job-modal.html',
			controller: 'JobModalController',
			resolve: {
				Job: function(){
					return object;
				}
			}
		});
	}

	// UTILITY FUNCTIONS //

	$scope.slug = function(text){
		return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
	}

}])

.controller('JobModalController', ['$scope', 'Job', function($scope, Job){
	$scope.job = Job;
}]);




