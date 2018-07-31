
angular.module('myApp', [])
.controller('MainCtrl', function($scope, $http) {
    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').
        then(function(response) {
            $scope.getStory = response.data;
        });
});
