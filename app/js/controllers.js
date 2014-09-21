'use strict';

angular.module('harley.controllers', [])

.controller('MainController', ['$scope', '$document', '$window', '$modal', '$swipe', 'Proof', 'Employment', 'Skills', 'Education',
	function($scope, $document, $window, $modal, $swipe, Proof, Employment, Skills, Education){

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
	$scope.showJob = function(toShow){
		$modal.open({
			templateUrl: 'template/job-modal.html',
			controller: 'JobModalController',
			showControls: true,
			windowClass: 'job',
			resolve: {
				Jobs: function(){
					return Employment.history;
				},
				job: function(){
					return toShow;
				}
			}
		});
	}

	// TO THE TOP PLS! //
	$scope.toTheTop = function(){ $document.scrollTo(0, 0, 1000); }

	// OPEN THE MENU //
	$scope.openMenu = function(){
		$modal.open({
			templateUrl: 'template/menu-popup.html',
			showControls: false,
			controller: function($scope){

				// COOL SCROLLY STUFF //
				$scope.goTo = function(section){
					$scope.$close();
					var target = angular.element(document.getElementById(section));
					$document.scrollTo(target, 0, 1000, function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t });
				};
			}
		});
	};

	// COOL HIDING MENU BAR (f*ckya headroom.js for not working on mobile) //

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

.controller('JobModalController', ['$scope', '$sce', 'Jobs', 'job', function($scope, $sce, Jobs, job){
	$scope.jobs = Jobs;
	$scope.activeJob = job;
	$scope.job = $scope.jobs[$scope.activeJob];
	console.log($scope.job);

	$scope.windowClass = 'job';
	$scope.showControls = true;

	angular.forEach($scope.jobs, function(j){
		j.descSafe = $sce.trustAsHtml(j.desc);
	});

	$scope.openWork = function(link){
		if(link !== "") window.open(link,'_blank');
	}

	$scope.prev = function(){
		$scope.activeJob--;
		if($scope.activeJob < 0) $scope.activeJob = $scope.jobs.length-1;
		$scope.job = $scope.jobs[$scope.activeJob];
	}

	$scope.next = function(){
		$scope.activeJob++;
		if($scope.activeJob > $scope.jobs.length-1) $scope.activeJob = 0;
		$scope.job = $scope.jobs[$scope.activeJob];
	}


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
