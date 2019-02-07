(function() {
    
    var app = angular.module('commentsApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CommentsController',
                templateUrl: 'app/views/comments.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());