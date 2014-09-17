'use strict';

angular.module('harley.directives', [])

.directive('hamburgerButton', function(){
	return {
		replace: true,
		restrict: 'AE',
		templateUrl: '/template/modal/modal-close.html',
		scope: {
			callback: '&',
			open: '='
		}
	}
})

.directive('spinningLogo', function($document){
	return {
		restrict: 'AE',
		link: function(scope, el, attrs){
			$document.on('scroll', function(){
				var offset = $document.scrollTop();
				offset = offset * 2;
				el.css({
					'-moz-transform': 'rotate(' + offset + 'deg)',
			    '-webkit-transform': 'rotate(' + offset + 'deg)',
			    '-o-transform': 'rotate(' + offset + 'deg)',
			    '-ms-transform': 'rotate(' + offset + 'deg)',
			    'transform': 'rotate(' + offset + 'deg)',
				})
			});
		}
	}
})

.directive('navMenu', function($modal, $document){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/template/nav-menu.html',
		link: function(scope, el, attrs){

			// TO THE TOP PLS! //
			scope.toTheTop = function(){ $document.scrollTo(0, 0, 1000); }

			// OPEN THE MENU //
			scope.openMenu = function(){
				$modal.open({
					templateUrl: '/template/menu-popup.html',
					controller: function($scope){
						$scope.goTo = function(section){
							$scope.$close();
							var target = angular.element(document.getElementById(section));
							$document.scrollTo(target, 0, 1000, function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t });
						};
					}
				});
			};

			// COOL SCROLLY STUFF //
			scope.goTo = function(section){
				if(scope.menuOpen) scope.menuOpen = false;
				
			};
		}
	};
});