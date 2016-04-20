

'use strict';


store.controller('storeCtrl', function ($scope) {

    $scope.navType =  'navbar-shrink';

    $scope.products = [

        {
            'name': 'China 10000 SMS Plan',
            'type': 'SMS Packages',
            'desc': 'Cover mainland China all mobile network operators channels.',
            'price': '99',
            'pic': 'img/product1.jpg',
        },

        {
            'name': 'Hong Kong 10000 SMS Plan',
            'type': 'SMS Packages',
            'desc': 'Cover Hong Kong all mobile network operators & mobile virtual network operators channels',
            'price': '59',
            'pic': 'img/product2.jpg',
        },

        {
            'name': 'Japan 10000 SMS Plan',
            'type': 'SMS Packages',
            'desc': 'Cover Japan all mobile network operators channels',
            'price': '199',
            'pic': 'img/product1.jpg',
        },

        {
            'name': 'Numeric OA Service',
            'type': 'SMS Packages',
            'desc': 'Provide a real calling number',
            'price': '19/Monthly',
            'pic': 'img/product2.jpg',
        },

        {
            'name': 'Schedule Job Service',
            'type': 'SMS Packages',
            'desc': 'SMS could be sent regularly by self-setting',
            'price': '29/Monthly',
            'pic': 'img/product1.jpg',
        },

        {
            'name': 'China SMS [10000 Plan] ',
            'type': 'SMS Packages',
            'desc': 'Contain 10000 Message.',
            'price': '999',
            'pic': 'img/product2.jpg',
        }
    ];


});

