'use strict';

app.directive("scroll", function ($window) {
    return function($scope) {
        var  changeHeaderOn = 300;
        var  didScroll = false;
        angular.element($window).bind("scroll", function() {

            //  console.log($window.pageYOffset);
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 0 );
                $scope.$apply();
            }

        });

        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                $scope.navType = 'navbar-shrink';
            }
            else {
                $scope.navType = 'navbar-default';
            }
            didScroll = false;
            $scope.$apply();
        }


        function scrollY() {
            return $window.pageYOffset;
        }

    };
});


/*

app.directive("dropdown",function() {
    return function(){

        angular.element($window).bind("click", function() {

        }

        $('.tree-toggle').click(function () {
            $(this).parent().children('ul.tree').toggle(200);
        });


        $(function(){
            $('.tree-toggle').parent().children('ul.tree').last().toggle(200);
        })

        $scope.hideMenu = function(){
            angular.element('.navbar-toggle:visible').trigger('click');
        };
    }
}
);
    */