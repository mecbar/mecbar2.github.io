'use strict';
(function() {

 var app = angular.module('mecbar', []) 

     
  app.controller('MenuCtrl', ['$scope' , function($scope) {
     $scope.operationList=[];

     $scope.addOperation = function(operation) {
       
     /*  $scope.operationList.push({ name : operation.name});
     */  
       $scope.operationList.push($scope.operationList.length)
       $scope.operation=[];
         
      
      };
  } ] )
    }
);
