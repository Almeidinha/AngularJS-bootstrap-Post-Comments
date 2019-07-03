(function() {
    const commentsFactory = function($http) {
    
        const factory = {};
        
        factory.getComments = function() {
            return $http.get('http://jsonplaceholder.typicode.com/comments');
        };
        
        return factory;
    };
    
    commentsFactory.$inject = ['$http'];
        
    angular.module('commentsApp').factory('commentsFactory', commentsFactory);
                                           
}());