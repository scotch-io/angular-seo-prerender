angular
  .module('prerender-tutorial', ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        name: 'base',
        templateUrl: 'views/homeView.html'
      })
      .when('/about', {
        name: 'about',
        templateUrl: '/views/aboutView.html'
      })
      .when('/features', {
        name: 'features',
        templateUrl: '/views/featuresView.html'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
    })
    .run(function($rootScope){
      const pageMeta = {
        base: {
          pageTitle : 'AngularJS SEO Tutorial',
          pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.'
        },
        about: {
          pageTitle : 'About',
          pageDescripton: 'We are a content heavy website so we need to be indexed.'
        },
        features: {
          pageTitle : 'Features',
          pageDescripton: 'Check out some of our awesome features!'
        }
      };

      $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
        const route = current.$$route.name;
        const pageInfo = pageMeta[route] || pageMeta.base;

        $rootScope.pageTitle = pageInfo.pageTitle;
        $rootScope.pageDescription = pageInfo.pageDescription;
      });
    });
