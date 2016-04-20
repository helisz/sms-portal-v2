'use strict';

home.controller('homeCtrl', function ($scope) {


    $scope.navs = [

        {
            'text': 'Product',
            'scroll': 'services',
            'a': '#services'
        },
        {
            'text': 'Use Cases',
            'scroll': 'portfolio',
            'a': '#portfolio'
        },
        {
            'text': 'About',
            'scroll': 'about',
            'a': '#about'
        },
        {
            'text': 'Contact',
            'scroll': 'contact',
            'a': '#contact'
        }
    ];


    $scope.products = [

        {
            'name': 'SMS短訊服務',
            'description': '以國際水準的電訊平台為企業提供收發商業短訊的理想選擇。',
            'icon': 'fa-paper-plane'
        },
        {
            'name': 'IDD語音服務',
            'description': '為企業客戶提供線路交換語音服務，為全球電訊運營商處理相當的語音流量。',
            'icon': 'fa-laptop'
        },
        {
            'name': 'Data數據服務',
            'description': '以世界頂尖數據中心為客戶提供跨地域服務，數據中心佔地面積達 90,000平方呎。',
            'icon': 'fa-lock'
        },

    ];

    $scope.portfolios = [

        {
            'description': 'Facebook',
            'sub': 'SMS Service',
            'a': '#',
            'img': 'img/case1.png',
            'detail': 'CITIC Telecom provide a whole world coverage channel allow Facebook to enjoy SMS service',
        },
        {
            'description': 'Bank of China',
            'sub': 'SMS Service',
            'a': '#',
            'img': 'img/case2.png',
            'detail': 'BOC Hong Kong batch send SMS via CITIC Telecom provided channel, meanwhile, CITIC Telecom provide a variety of customized report for BOC Hong Kong to analyze',
        },
        {
            'description': 'Cathay Pacific',
            'sub': 'SMS Service',
            'a': '#',
            'img': 'img/case3.png',
            'detail': 'Cathay Pacific send SMS notification to customer timely that inform fight information.'
        },

    ];


});
