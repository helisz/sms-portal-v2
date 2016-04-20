var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngCookies',
    'myApp.home',
    'myApp.store',
    'myApp.login',
    'myApp.register',
    'myApp.forgetpw',
    'myApp.doc',
    'smoothScroll',
    'pascalprecht.translate',
    'myApp.version'
]);


var home = angular.module('myApp.home', ['ngRoute', 'ngAnimate']);

var store = angular.module('myApp.store', ['ngRoute', 'ngAnimate']);

var doc = angular.module('myApp.doc', ['ngRoute', 'ngAnimate']);

var login = angular.module('myApp.login', ['ngRoute', 'ngAnimate']);

var register = angular.module('myApp.register', ['ngRoute', 'ngAnimate']);

var forgetpw = angular.module('myApp.forgetpw', ['ngRoute', 'ngAnimate']);