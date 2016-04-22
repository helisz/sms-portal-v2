'use strict';


store.controller('storeCtrl', function ($scope) {

   $scope.navType =  'navbar-shrink';

   $scope.areas = [
	  { 'name': 'Asia' },
	  { 'name': 'Europe' },
	  { 'name': 'NorthAmerica' },
	  { 'name': 'South America' },
	  { 'name': 'Australia' },
	  { 'name': 'Africa' },
	  { 'name': 'Antarctica' }
   ];
   $scope.countries = [
	  { 'name': 'Mainland China'},
	  { 'name': 'Hong Kong'},
	  { 'name': 'Macau'},
	  { 'name': 'Taiwan'},
	  { 'name': 'North Korea'},
	  { 'name': 'Japan'},
	  { 'name': 'Thailand'}
   ]
   $scope.prices = [
	  { 'name': '$0-$100'},
	  { 'name': '$101-$200'},
	  { 'name': '$201-$500'},
	  { 'name': '$501-$1000'},
	  { 'name': 'more than $1000'}
   ]

   $scope.servicenavs = [
	  {
		 'name': 'SMS Service',
		 'url':	'#/store/sms',
		 'icon': 'icon-envelope',
		 'title': 'services'
	  },
	  {
		 'name': 'IDD Service',
		 'url':	'#/store/sms',
		 'icon': 'icon-phone',
		 'title': 'services'
	  },
	  {
		 'name': 'Data Service',
		 'url':	'#/store/sms',
		 'icon': 'icon-inbox',
		 'title': 'services'
	  },
	  {
		 'name': 'IDC Service',
		 'url':	'#/store/sms',
		 'icon': 'icon-tasks',
		 'title': 'services'
	  },
	  {
		 'name': 'HK Mobile Service',
		 'url':	'#/store/sms',
		 'icon': 'icon-signal',
		 'title': 'services'
	  },
	  {
		 'name': 'Other Section A',
		 'url':	'#/store/sms',
		 'icon': 'icon-sign-blank',
		 'title': 'others'
	  },
	  {
		 'name': 'Other Section B',
		 'url':	'#/store',
		 'icon': 'icon-sign-blank',
		 'title': 'others'
	  },
	  {
		 'name': 'Other Section C',
		 'url':	'#/store',
		 'icon': 'icon-sign-blank',
		 'title': 'others'
	  },
   ];

   $scope.products = [

	  {
		 'name': 'China 5000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators channels.',
		 'price': '59',
		 'pic': 'img/cn1.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'China 10000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators & mobile virtual network operators channels',
		 'price': '99',
		 'pic': 'img/cn2.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'China 20000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/cn3.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'Korea 5000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover Korea all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/kr1.jpg',
		 'region': 'kr',
	  },

	  {
		 'name': 'Korea 10000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover Korea all mobile network operators channels',
		 'price': '299',
		 'pic': 'img/kr2.jpg',
		 'region': 'kr',
	  },

	  {
		 'name': 'Japan SMS [10000 Plan] ',
		 'type': 'SMS Packages',
		 'desc': 'Cover Japan all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/jp1.jpg',
		 'region': 'jp',
	  }
   ];


});

