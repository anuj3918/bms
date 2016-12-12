angular.module('pg', ['ui.router']);

angular.module('pg').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================

        .state('/', {
	        url: '/',
	        templateUrl: 'pages/partial-home.html'
	    })

        .state('graph1', {
            url: '/graph1',
	        templateUrl: 'pages/graph1.html'  
        });
        
});





 