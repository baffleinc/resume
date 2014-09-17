'use strict';

angular.module('harley.controllers', [])

.controller('MainController', ['$scope', '$document', '$window', '$modal', '$swipe', 'Proof', 'Employment', 'Skills', 'Education', 'parallaxHelper',
	function($scope, $document, $window, $modal, $swipe, Proof, Employment, Skills, Education, parallaxHelper){

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

	// JOB MODALS //
	$scope.showJob = function(object){
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

	// COOL HIDING MENU (f*ckya headroom.js for not working on mobile) //

	$document.on('scroll', function(){
		var scrollPos = $document.scrollTop();

		if(scrollPos < windowHeight+1) $scope.showBar = true; // past 2nd section
		else if(previousScroll < scrollPos) $scope.showBar = false; // scrolling down
		else $scope.showBar = true; // scrolling up

		if(scrollPos > 44) $scope.barVisible = true; // at start of page
		else $scope.barVisible = false; // scrolling

		previousScroll = scrollPos;
		$scope.$apply();
	});

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




// REDUNDANT SH*T //

// thanks headroom.js
// $document.on('scroll', function(){
	// 	var scrollPos = $document.scrollTop();

	// 	if(scrollPos < windowHeight+1) $scope.showBar = true; // past 2nd section
	// 	else if(previousScroll < scrollPos) $scope.showBar = false; // scrolling down
	// 	else $scope.showBar = true; // scrolling up

	// 	if(scrollPos > 44) $scope.barVisible = true; // at start of page
	// 	else $scope.barVisible = false; // scrolling

	// 	previousScroll = scrollPos;
	// 	$scope.$apply();
	// });
