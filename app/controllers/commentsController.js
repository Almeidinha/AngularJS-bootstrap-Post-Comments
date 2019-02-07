(function() {
  
    var CommentsController = function ($scope, $log, $window, commentsFactory, appSettings) {
        $scope.sortBy = 'postId';
        $scope.reverse = false;
        $scope.posts = [];
        $scope.appSettings = appSettings;
        $scope.totalItems = 0;
        
        $scope.currentPage = 4;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 5; 
        
        function init() {
            commentsFactory.getComments().then(function(response) {
                    
            var post = {};

            for (var i = 0, l = response.data.length; i < l; i++) {

                var tt = $scope.posts.filter(p => p.postId === response.data[i].postId);

                if (tt.length == 0)  {
                    post.postId =   response.data[i].postId;
                    post.comments = response.data.filter(p => p.postId === response.data[i].postId);
                    $scope.posts.push(post);
                    var post = {};
                }
            };
            
            $scope.totalItems = $scope.posts.length;
                                    
            }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
            });
        }
        

        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CommentsController.$inject = ['$scope', '$log', '$window', 'commentsFactory', 
                                   'appSettings'];

    angular.module('commentsApp').controller('CommentsController', CommentsController);
    
}());