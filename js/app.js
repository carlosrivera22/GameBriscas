var app = angular.module('briscasApp', []);
  app.directive('removeOnClick', function() {
    return {
        link: function(scope, elt, attrs) {
            scope.remove = function() {
                elt.html('');
            };
        }
    }
});
  app.controller('BriscasController', function($scope) {

          //array of cards
          $scope.deck = ["/img/0.png","img/Bastos1.gif","img/Bastos2.gif","img/Bastos3.gif","img/Bastos4.gif","img/Bastos5.gif","img/Bastos6.gif",
          "img/Bastos7.gif","img/Bastos8.gif","img/Bastos9.gif","img/Bastos10.gif","img/Bastos11.gif","img/Bastos12.gif"];

          $scope.stack = [];
          $scope.hand1 = [];
          $scope.hand2 = [];
          $scope.play = [];
          $scope.life;
          var turn1 = true;
          var turn2 = false;

          //function that fills the deck stack
          $scope.fill_stack = function(){

            while($scope.deck.length > 1){
                do{
                var rand = Math.floor((Math.random() * $scope.deck.length));
              }
              while(rand == 0);
              $scope.stack.push($scope.deck[rand]);
              $scope.deck.splice(rand,1);

            }

            $scope.getHand1();
            $scope.getHand2();
            $scope.getLife();

          }

          //life card
          $scope.getLife = function(){
            $scope.life = $scope.stack.pop();
          }

          //player 1 hand
          $scope.getHand1 = function(){
            for(i=0;i<3;i++){
              $scope.hand1.push($scope.stack.pop());
            }

          }

          //player 2 hand
          $scope.getHand2 = function(){
            for(i=0;i<3;i++){
              $scope.hand2.push($scope.stack.pop());
            }

          }

          $scope.makePlay = function(card){
              $scope.play.push(card);
              console.log($scope.hand2);
              if(turn1){
                $scope.remove_card($scope.hand2,card);
              }else{
                $scope.remove_card($scope.hand1,card);
              }
              console.log($scope.hand2);
              $scope.switchTurns()
          }

            $scope.getTurn1 = function(){
              return turn1;
            }

            $scope.getTurn2 = function(){
              return turn2;
            }

            $scope.switchTurns = function(){
              if(turn2 == false){
                turn2 = true;
                turn1 = false;
              }else{
                turn2 = false;
                turn1 = true;
              }

          }

          $scope.remove_card = function(arr, card){
            for(i=0;i<arr.length;i++){
              if(card == arr[i]){
              //  $scope.removeDummy();
              }
            }
          }

/*
    $scope.removeDummy = function(){
      var elem = document.getElementById("dummy");
      elem.parentNode.removeChild(elem);
      return false;
    }
*/

      });
