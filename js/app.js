var mri = angular.module( 'mrisaacs', ['ngRoute'] )
    .config( function( $routeProvider, $locationProvider, $interpolateProvider, $httpProvider ) {
        $httpProvider.defaults.headers.common[ 'Content-Type' ] = 'application/json; charset=utf-8';

        $routeProvider.when( '/' , {
            templateUrl : 'html/main-article.html',
            controller  : 'MainArticleCtrl'
        });

        $locationProvider
            .html5Mode( true )
            .hashPrefix( '!' );

        $interpolateProvider.startSymbol( '{[{' );
        $interpolateProvider.endSymbol( '}]}' );
});

mri.controller( 'MainArticleCtrl', function( $scope, $http ) {
    $http.get( 'data/articles.json' )
    .success( function( response, status, headers, config ) {
        $scope.main = {
            title : response.title,
            body  : response. body
        };
    });
});

mri.directive('dateAgo', function() {
    return {
        restrict : 'E',
        template : '<p ng-bind="date"></p>',
        replace  : true,
        link     : function( scope, elem, attr, ctrl ) {
            console.log( elem );
            scope.date = attr.datetime;
            console.log( attr );
        }
    }
});
