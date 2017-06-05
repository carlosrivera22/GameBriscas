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

  app.controller('BriscasController', function($scope,$http,briscasService) {

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

            },
            {
              nombre:"Espadas1",
              path:"img/Espadas1.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas2",
              path:"img/Espadas2.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas3",
              path:"img/Espadas3.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas4",
              path:"img/Espadas4.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas5",
              path:"img/Espadas5.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas6",
              path:"img/Espadas6.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas7",
              path:"img/Espadas7.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas8",
              path:"img/Espadas8.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas9",
              path:"img/Espadas9.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas10",
              path:"img/Espadas10.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas11",
              path:"img/Espadas11.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Espadas12",
              path:"img/Espadas12.gif",
              vida: false,
              denominacion: "Espadas",

            },
            {
              nombre:"Oros1",
              path:"img/Oros1.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros2",
              path:"img/Oros2.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros3",
              path:"img/Oros3.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros4",
              path:"img/Oros4.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros5",
              path:"img/Oros5.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros6",
              path:"img/Oros6.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros7",
              path:"img/Oros7.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros8",
              path:"img/Oros8.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros9",
              path:"img/Oros9.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros10",
              path:"img/Oros10.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros11",
              path:"img/Oros11.gif",
              vida: false,
              denominacion: "Oros",

            },
            {
              nombre:"Oros12",
              path:"img/Oros12.gif",
              vida: false,
              denominacion: "Oros",

            },
          ];

          $scope.briscas_service = briscasService;


          $scope.data_two_v_two = {
            cards_in_play: $scope.play,
            agent1_cards: $scope.hand1,
            agent2_cards: $scope.hand3,
            agent3_cards: $scope.hand4,
            played_cards: $scope.played_cards,
          }

          $scope.stack = [];
          $scope.hand1 = [];
          $scope.hand2 = [];
          $scope.hand3 = [];
          $scope.hand4 = [];
          $scope.play = [];
          $scope.cards_in_play = [];
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

          $scope.makePlay = function(card,player){
            $scope.cards_in_play.push(card);
            $scope.play.push({
              player:player,
              card:card,
              })

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
              $scope.sendData();
              setTimeout(function(){
              $scope.clearBoard();
              $scope.$apply();
            }, 3000);
          }

          $scope.clearBoard = function(){
            //determine who wins the round...
            //for now this function will randomly determine a winner for testing
            //for now it will not works
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);


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

          $scope.sendData = function(){
            $scope.data_one_v_one = {
              cards_in_play: JSON.stringify($scope.play),
              //agent1_cards: $scope.hand1,
              //played_cards: $scope.played_cards,

            };
          //  console.log($scope.data_one_v_one);
            $scope.briscas_service.sendData($scope.data_one_v_one);
          }

          $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
              //you also get the actual event object
              //do stuff, execute functions -- whatever...

                if($scope.cards_in_play.length > 1){
                  $scope.evaluatePlay();
                  $scope.drawCard();
              }


          });

      });
