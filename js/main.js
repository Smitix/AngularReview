/**
 * Created by Mark on 5/5/2016.
 */
var app = angular.module('myApp', []);

app.controller('PlayerController', function($scope) {
    $scope.audio = document.createElement('audio');
    $scope.playing = false;
    $scope.audio.src = 'media/SavingGrace.m4a';

    $scope.play = function() {
        $scope.audio.play();
        $scope.playing = true;
    };

    $scope.stop = function() {
        $scope.audio.pause();
        $scope.playing = false;
    };

    $scope.audio.addEventListener('ended', function() {
       $scope.$apply(function() {
           $scope.stop()
       }) ;
    });
});

app.controller('RelatedController', function($scope) {

});