
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'components/home/homeView.html',
        controller: 'homeCtrl'
    });

    $routeProvider.when('/store', {
        templateUrl: 'components/store/storeView.html',
        controller: 'storeCtrl'
    });
	
	$routeProvider.when('/store/sms', {
        templateUrl: 'components/store/storeCategory.html',
        controller: 'storeCtrl'
    });
	
	$routeProvider.when('/store/sms/product', {
        templateUrl: 'components/store/storeProduct.html',
        controller: 'storeCtrl'
    });
	
	$routeProvider.when('/cart', {
        templateUrl: 'components/cart/cartView.html',
        controller: 'storeCtrl'
    });
	
		
	$routeProvider.when('/checkout', {
        templateUrl: 'components/cart/checkoutView.html',
        controller: 'storeCtrl'
    });

	$routeProvider.when('/checkoutSuccess', {
        templateUrl: 'components/cart/checkoutSuccess.html',
        controller: 'storeCtrl'
    });

    $routeProvider.when('/doc', {
        templateUrl: 'components/doc/docView.html',
        controller: 'docCtrl'
    });

    $routeProvider.when('/login', {
        templateUrl: 'components/login/loginView.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    });

    $routeProvider.when('/register', {
        templateUrl: 'components/login/registerView.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
    });

    $routeProvider.when('/forgetpw', {
        templateUrl: 'components/login/forgetpwView.html',
        controller: 'forgetpwCtrl'
    });

    $routeProvider.when('/admin', {
        templateUrl: 'admin',
        controller: 'AdminController'
    });

    $routeProvider.otherwise({redirectTo: '/home'});

}]);



app.run(['$rootScope', '$location', '$cookieStore', '$http', '$anchorScroll', 'smoothScroll',
    function($rootScope, $location, $cookieStore, $http, $anchorScroll, smoothScroll ) {

        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            if($location.hash()) $anchorScroll();
        });

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;

         //   if (restrictedPage && !loggedIn) {
          //      $location.path('/login');
           // }
        });
    }
    ]);
