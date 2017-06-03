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
          $scope.deck = [
            {
              nombre:"",
              path:"/img/0.png",
              vida: false,
              denominacion: "",
            },
            {
              nombre:"Bastos1",
              path:"img/Bastos1.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos2",
              path:"img/Bastos2.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos3",
              path:"img/Bastos3.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos4",
              path:"img/Bastos4.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos5",
              path:"img/Bastos5.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos6",
              path:"img/Bastos6.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos7",
              path:"img/Bastos7.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos8",
              path:"img/Bastos8.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos9",
              path:"img/Bastos9.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos10",
              path:"img/Bastos10.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos11",
              path:"img/Bastos11.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Bastos12",
              path:"img/Bastos12.gif",
              vida: false,
              denominacion: "Bastos",
            },
            {
              nombre:"Copas1",
              path:"img/Copas1.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas2",
              path:"img/Copas2.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas3",
              path:"img/Copas3.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas4",
              path:"img/Copas4.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas5",
              path:"img/Copas5.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas6",
              path:"img/Copas6.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas7",
              path:"img/Copas7.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas8",
              path:"img/Copas8.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas9",
              path:"img/Copas9.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas10",
              path:"img/Copas10.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas11",
              path:"img/Copas11.gif",
              vida: false,
              denominacion: "Copas",
            },
            {
              nombre:"Copas12",
              path:"img/Copas12.gif",
              vida: false,
              denominacion: "Copas",
            }];

          $scope.stack = [];
          $scope.hand1 = [];
          $scope.hand2 = [];
          $scope.hand3 = [];
          $scope.hand4 = [];
          $scope.play = [];
          $scope.life;
          $scope.played_cards = [];
          $scope.two_v_two = false;
          var turn1 = true;
          var turn2 = false;
          var disabled = false;
          var stack_is_empty = false;


          $scope.startGame = function(){
            $scope.fillStack();
            $scope.getLife();
            $scope.setVidas();
            $scope.getHand1();
            $scope.getHand2();
            if($scope.two_v_two){
              $scope.getHand3();
              $scope.getHand4();
            }
            disabled = true;
          }
          $scope.twoVtwo = function(){
            $scope.two_v_two = true;
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

          $scope.setVidas = function(){
            for(i=0;i<$scope.stack.length;i++){
              if($scope.stack[i].denominacion === $scope.life.denominacion){
                $scope.stack[i].vida = true;

              }
            }
          }

          //life card
          $scope.getLife = function(){
            $scope.life = $scope.stack.pop();
            $scope.life.vida = true;
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

          $scope.getHand3 = function(){
            for(i=0;i<3;i++){
              $scope.hand3.push($scope.stack.pop());
            }
          }

          $scope.getHand4 = function(){
            for(i=0;i<3;i++){
              $scope.hand4.push($scope.stack.pop());
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

          /*
          $scope.lifeIsDrawn = function(){
            if($scope.hand2.indexOf($scope.life) != -1 || $scope.hand1.indexOf($scope.life) != -1 || $scope.play.indexOf($scope.life) != -1 || $scope.played_cards.indexOf($scope.life) != -1){
              return false;
            }else{
              return true;
            }
          }
          */
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
