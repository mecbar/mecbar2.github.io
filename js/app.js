'use strict';
(function() {

  angular.module('mecbar', [])
    .controller('SituazioneGenerale', function($scope) {
       $scope.valori = {
       cassa: '0.00',
        oncard: '0.00',
      alice: '6621.45',
      alessandro: '8566.45',
      descrizione: 'altri depositi',
     }

   var imp = {}; 
  }).controller('ShowController' , function() {
    this.risultato = false ;

    this.set = function(risultato) {
          this.risultato = risultato;
          }

  } ).controller('ReviewController', [ '$http', function($http) {
    
     var rev = this;
     this.operaz = [];
     var imp = {};
     $('input').html('   ');
    
     this.addImporto = function(imp) {
        this.operaz = [];
       imp = this.importo;
       this.ciao = imp;
         this.risultato = false ;

         this.set = function(risultato) {
            this.risultato = risultato;
         }      
                    
       rev.operaz = [];
     
      $http({
      method : 'GET' ,
      /* 
      url : '/provajax',
      */
      url : '/api/v1/ccbm/',
      data : this.importo ,
      }).success(function(resp) {
            
         rev.operaz = resp['objects'];
        /*  
        
       var  impo = imp.toString();
        
       */
       
         
            } ); 
     } 
     }
     
  ]);

}) ();
  