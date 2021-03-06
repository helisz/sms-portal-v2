'use strict';
app.run(function($rootScope) {
	$rootScope.cartnumber = 0;
})


app.controller('routeController', function($scope, $rootScope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.productnum = 1;

	$scope.value = 12;

	$scope.navs = [

		{
			'text': 'Product',
			'scroll': 'services',
			'a': '#services',
			'routeAnchor': '#/home#services'
		},
		{
			'text': 'Use Cases',
			'scroll': 'portfolio',
			'a': '#portfolio',
			'routeAnchor': '#/home#portfolio'
		},
		{
			'text': 'About',
			'scroll': 'about',
			'a': '#about',
			'routeAnchor': '#/home#about'
		},
		{
			'text': 'Contact',
			'scroll': 'contact',
			'a': '#contact',
			'routeAnchor': '#/home#contact'
		}
	];

	$scope.addToCart = function(value){
		$rootScope.cartnumber += value;
		console.log(value);
	}


});





app.factory('userService', function($timeout, $filter, $q){

	var service = {};

	service.GetAll = GetAll;
	service.GetById = GetById;
	service.GetByUsername = GetByUsername;
	service.GetByEmail = GetByEmail;
	service.Create = Create;
	service.Update = Update;
	service.Delete = Delete;

	return service;

	function GetAll() {
		var deferred = $q.defer();
		deferred.resolve(getUsers());
		return deferred.promise;
	}

	function GetById(id) {
		var deferred = $q.defer();
		var filtered = $filter('filter')(getUsers(), { id: id });
		var user = filtered.length ? filtered[0] : null;
		deferred.resolve(user);
		return deferred.promise;
	}

	function GetByUsername(username) {
		var deferred = $q.defer();
		var filtered = $filter('filter')(getUsers(), { username: username });
		var user = filtered.length ? filtered[0] : null;
		deferred.resolve(user);
		return deferred.promise;
	}

	function GetByEmail(email) {
		var deferred = $q.defer();
		var filtered = $filter('filter')(getUsers(), { email: email });
		var user = filtered.length ? filtered[0] : null;
		deferred.resolve(user);
		return deferred.promise;
	}

	function Create(user) {
		var deferred = $q.defer();

		// simulate api call with $timeout
		$timeout(function () {
			GetByUsername(user.username)
				.then(function (duplicateUser) {
				if (duplicateUser !== null) {
					deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
				} else {
					var users = getUsers();

					// assign id
					var lastUser = users[users.length - 1] || { id: 0 };
					user.id = lastUser.id + 1;

					// save to local storage
					users.push(user);
					setUsers(users);

					deferred.resolve({ success: true });
				}
			});

		}, 1000);

		return deferred.promise;
	}

	function Update(user) {
		var deferred = $q.defer();

		var users = getUsers();
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === user.id) {
				users[i] = user;
				break;
			}
		}
		setUsers(users);
		deferred.resolve();

		return deferred.promise;
	}

	function Delete(id) {
		var deferred = $q.defer();

		var users = getUsers();
		for (var i = 0; i < users.length; i++) {
			var user = users[i];
			if (user.id === id) {
				users.splice(i, 1);
				break;
			}
		}
		setUsers(users);
		deferred.resolve();

		return deferred.promise;
	}

	// private functions

	function getUsers() {
		if(!localStorage.users){
			localStorage.users = JSON.stringify([]);
		}

		return JSON.parse(localStorage.users);
	}

	function setUsers(users) {
		localStorage.users = JSON.stringify(users);
	}

});




app.controller('langCtrl', ['$scope', '$rootScope', '$translate', '$translatePartialLoader', function($scope, $rootScope, $translate, $translatePartialLoader) {

	// $translatePartialLoader.addPart('home');
	// $translate.refresh();

	$rootScope.lang = $translate.proposedLanguage();
	$rootScope.currentLang= $translate.proposedLanguage();

	$scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
		$rootScope.lang=langKey;
		$rootScope.currentLang=langKey;
	}

	$scope.hideMenu = function(){
		angular.element('.navbar-toggle:visible').trigger('click');
	};

}]
			  );

app.controller('socialListCtrl', function ($scope) {
	$scope.socials = [
		{
			'name': 'twitter',
			'link': '#'
		},
		{
			'name': 'facebook',
			'link': '#'
		},
		{
			'name': 'weibo',
			'link': '#'
		}
	];
});






