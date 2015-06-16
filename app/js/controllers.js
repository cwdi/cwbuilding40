'use strict';

/* Controllers */

var tenantApp = angular.module('newcw', []);

tenantApp.controller('TenantListCtrl', function ($scope, $http) {
	$http.get('tenants/Building40.json').success(function(data) {
		$scope.tenants = data;
		$scope.predicate = 'name';
		$scope.reverse = true;
			
		});



	/* $scope.orderProp = 'name_text'; */
});

// var sliderApp=angular.module('sliderApp',['ngAnimate']);

tenantApp.controller('SliderController', function($scope) {
    $scope.images=[{src:'001.jpg',title:'Pic 1'},{src:'002.jpg',title:'Pic 2'},{src:'003.jpg',title:'Pic 3'},{src:'004.jpg',title:'Pic 4'},{src:'005.jpg',title:'Pic 5'}, {src:'006.jpg',title:'Pic 6'},{src:'007.jpg',title:'Pic 7'},{src:'008.jpg',title:'Pic 8'},{src:'009.jpg',title:'Pic 9'},{src:'010.jpg',title:'Pic 10'}, {src:'011.jpg',title:'Pic 11'},{src:'012.jpg',title:'Pic 12'},{src:'013.jpg',title:'Pic 13'},{src:'014.jpg',title:'Pic 14'},{src:'015.jpg',title:'Pic 15'}, {src:'016.jpg',title:'Pic 16'},{src:'017.jpg',title:'Pic 17'},{src:'018.jpg',title:'Pic 18'},{src:'019.jpg',title:'Pic 19'},{src:'020.jpg',title:'Pic 20'}]; 
});
 
tenantApp.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,5000);
			},5000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'templates/templateurl.html'
  }
});

