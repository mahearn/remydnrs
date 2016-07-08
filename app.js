var remyndrApp = angular.module('remyndrApp', ['ngRoute']);

// routes
remyndrApp.config(function ($routeProvider) {
    
    $routeProvider
	    .when('/remyndrs', {
	      	templateUrl: '/views/remyndrs.html',
	      	controller: 'remyndrController'
	    })
	    .otherwise({
	    	redirectTo: '/remyndrs'
	    });

});