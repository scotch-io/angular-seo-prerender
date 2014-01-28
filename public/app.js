var app = angular.module('prerender-tutorial', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/homeView.html',
            controller: 'homeController'
        })

        $routeProvider.when('/about', {
            templateUrl : '/views/aboutView.html',
            controller: 'aboutController'
        })

	    $routeProvider.when('/features', {
	        templateUrl : '/views/featuresView.html',
	        controller : 'featuresController'
	    })

        $routeProvider.otherwise({
                redirectTo : '/'
        });

    	$locationProvider.html5Mode(true);
    	$locationProvider.hashPrefix('!');
    });

function mainController($scope) {
    // We will create an seo variable on the scope and decide which fields we want to populate
    $scope.seo = {
        pageTitle : '',
        pageDescription : ''
    };
}

function homeController($scope) {
    // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content.
    // Additionally you can create a service to update the SEO variables - but that's for another tutorial.
    $scope.$parent.seo = {
        pageTitle : 'AngularJS SEO Tutorial',
        pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.'
    };
}

function aboutController($scope) {
    $scope.$parent.seo = {
        pageTitle : 'About',
        pageDescripton: 'We are a content heavy website so we need to be indexed.'
    };
}

function featuresController($scope) {
    $scope.$parent.seo = {
        pageTitle : 'Features',
        pageDescripton: 'Check out some of our awesome features!'
    };
}
