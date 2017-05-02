var app = angular.module('briscasApp', []);

  app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});

  app.controller('BriscasController', function($scope) {

          //array of cards
          $scope.deck = ["/img/0.png","img/Bastos1.gif","img/Bastos2.gif","img/Bastos3.gif","img/Bastos4.gif","img/Bastos5.gif","img/Bastos6.gif",
          "img/Bastos7.gif","img/Bastos8.gif","img/Bastos9.gif","img/Bastos10.gif","img/Bastos11.gif","img/Bastos12.gif","img/Copas1.gif","img/Copas2.gif","img/Copas3.gif","img/Copas4.gif","img/Copas5.gif","img/Copas6.gif",
          "img/Copas7.gif","img/Copas8.gif","img/Copas9.gif","img/Copas10.gif","img/Copas11.gif","img/Copas12.gif"];

          $scope.stack = [];
          $scope.hand1 = [];
          $scope.hand2 = [];
          $scope.play = [];
          $scope.life;
          $scope.played_cards = [];

          var turn1 = true;
          var turn2 = false;
          var disabled = false;
          var stack_is_empty = false;


          $scope.startGame = function(){
            $scope.fillStack();
            $scope.getHand1();
            $scope.getHand2();
            $scope.getLife();
            disabled = true;
          }

          $scope.disabled = function(){
            return disabled;
          }
          //function that fills the deck stack
          $scope.fillStack = function(){

            while($scope.deck.length > 1){
                do{
                var rand = Math.floor((Math.random() * $scope.deck.length));
              }
              while(rand == 0);
              $scope.stack.push($scope.deck[rand]);
              $scope.deck.splice(rand,1);

            }

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

              if(turn1){
                $scope.removeCard($scope.hand2,card);
              }else{
                $scope.removeCard($scope.hand1,card);
              }

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

          $scope.removeCard = function(arr, card){
              index = arr.indexOf(card);
              if(index > -1){
                  arr.splice(index,1);
              }

          }

          $scope.evaluatePlay = function(){
              alert("Card 1 won this play");
              $scope.clearBoard();
          }

          $scope.clearBoard = function(){
            //determine who wins the round...
            //for now this function will randomly determine a winner for testing
            //for now it will not works
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.played_cards.push($scope.play[0]);
              $scope.played_cards.push($scope.play[0]);

          }

          $scope.deckIsNotEmpty = function(){
            return !stack_is_empty;
          }

          $scope.lifeIsDrawn = function(){
            if($scope.hand2.indexOf($scope.life) != -1 || $scope.hand1.indexOf($scope.life) != -1 || $scope.play.indexOf($scope.life) != -1 || $scope.played_cards.indexOf($scope.life) != -1){
              return false;
            }else{
              return true;
            }
          }

          $scope.drawCard = function(){
            //function will change for the order of draw, winner draws first
            if($scope.stack.length > 1){
              //draw for both hands
              $scope.hand1.push($scope.stack.pop());
              $scope.hand2.push($scope.stack.pop());
            }
            else if($scope.stack.length == 1){
              //draw for one hand
              //tomar la vida y si no hay vida entonces una mano coge solamente
              $scope.hand1.push($scope.stack.pop());
              $scope.hand2.push($scope.life);
            }else{
              stack_is_empty = true;
            }
          }

          $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
              //you also get the actual event object
              //do stuff, execute functions -- whatever...

                if($scope.play.length > 1){
                  $scope.evaluatePlay();
                  $scope.drawCard();
              }


          });

      });
