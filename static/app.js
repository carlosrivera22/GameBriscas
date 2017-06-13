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
              Player: "",
              nombre:"",
              path:"static/img/0.png",
              vida: "False",
              denominacion: "",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Bastos1.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Bastos2.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Bastos3.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Bastos4.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Bastos5.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Bastos6.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Bastos7.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Bastos10.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Bastos11.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Bastos12.gif",
              vida: "False",
              denominacion: "Bastos",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Copas1.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Copas2.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Copas3.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Copas4.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Copas5.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Copas6.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Copas7.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Copas10.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Copas11.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Copas12.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Espadas1.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Espadas2.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Espadas3.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Espadas4.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Espadas5.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Espadas6.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Espadas7.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Espadas10.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Espadas11.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Espadas12.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Oros1.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Oros2.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Oros3.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Oros4.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Oros5.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Oros6.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Oros7.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Oros10.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Oros11.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Oros12.gif",
              vida: "False",
              denominacion: "Oro",

            },
          ];

          $scope.briscas_service = briscasService;

          $scope.score1 = 0;
          $scope.score2 = 0;
          $scope.score3 = 0;
          $scope.score4 = 0;
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
          var turn3 = true;
          var turn4 = true;
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
                $scope.stack[i].vida = "True";
              }

            }
          }

          //life card
          $scope.getLife = function(){
            $scope.life = $scope.stack.pop();
            $scope.life.vida = "True";
          }

          //player 1 hand
          $scope.getHand1 = function(){
            for(i=0;i<3;i++){
              $scope.hand1.push($scope.stack.pop());
              $scope.hand1[i].Player = "player1";
            }

          }

          //player 2 hand
          $scope.getHand2 = function(){
            for(i=0;i<3;i++){
              $scope.hand2.push($scope.stack.pop());
              $scope.hand2[i].Player = "player2";
            }


          }

          $scope.getHand3 = function(){
            for(i=0;i<3;i++){
              $scope.hand3.push($scope.stack.pop());
              $scope.hand3[i].Player = "player3";
            }
            console.log($scope.hand3);
          }

          $scope.getHand4 = function(){
            for(i=0;i<3;i++){
              $scope.hand4.push($scope.stack.pop());
              $scope.hand4[i].Player = "player4";
            }
          }

          $scope.makePlay = function(card,player){
            $scope.cards_in_play.push(card);
            $scope.play.push({
            //  player:player,
                Player: card.Player,
                denominacion: card.denominacion,
                nombre: card.nombre,
                vida: card.vida,
              })
              $scope.cards = {
                cards: $scope.play,
              }

              if(!$scope.two_v_two){
                if(turn1){
                  $scope.removeCard($scope.hand2,card);
                }else{
                  $scope.removeCard($scope.hand1,card);
                }
              }
              /*
              else{

              //  if(turn1){
                  $scope.removeCard($scope.hand4,card);
                //}
              //  else if(turn2){
                  $scope.removeCard($scope.hand3,card);
              //  }
              //  else if(turn3){
                  $scope.removeCard($scope.hand2,card);
              //  }
                //else if(turn4){
                  $scope.removeCard($scope.hand1,card)
              //  }

              }
              */
             $scope.switchTurns()

          }

            $scope.getTurn1 = function(){
              return turn1;
            }

            $scope.getTurn2 = function(){
              return turn2;
            }

            $scope.getTurn3 = function(){
              return turn3;
            }

            $scope.getTurn4 = function(){
              return turn4
            }

            $scope.switchTurns = function(){
              if(!$scope.two_v_two){
                if(turn2 == false){
                  turn2 = true;
                  turn1 = false;
                }else{
                  turn2 = false;
                  turn1 = true;
                }
              }
              /*
              else{
                if(turn1 == false){
                  turn1 = true;
                  turn2 = true;
                  turn3 = false;
                  turn4 = true;
                }
                else if(turn2 == false){
                  turn1 = true;
                  turn2 = true;
                  turn3 = true;
                  turn4 = false;
                }
                else if(turn3 == false){
                  turn1 = true;
                  turn2 = false;
                  turn3 = true;
                  turn4 = true;
                }
                else if(turn4 == false){
                  turn1 = false;
                  turn2 = true;
                  turn3 = true;
                  turn4 = true;
                }
              }
              */

          }

          $scope.removeCard = function(arr, card){
              index = arr.indexOf(card);
              if(index > -1){
                  arr.splice(index,1);
              }

          }




          $scope.determineTurns = function(winner){
            if(!$scope.two_v_two){
              if(winner == "player1"){
                turn1 = false;
                turn2 = true;
              }
              else if(winner == "player2"){
                turn1 = true;
                turn2 = false;
              }
            }
            /*
            else{
              if(winner == "player1"){
                turn1 = false;
                turn2 = true;
                turn3 = true;
                turn4 = true;

              }else if(winner == "player2"){
                turn2 = false;
                turn1 = true;
                turn3 = true;
                turn4 = true;
              }else if(winner == "player3"){
                turn1 = true;
                turn2 = true;
                turn3 = false;
                turn4 = true;
              }else if(winner == "player4"){
                turn1 = true;
                turn2 = true;
                turn3 = true;
                turn4 = false;
              }
            }
            */
          }
// THIS PART IS IMPORTANT TO THE PROJECT

          $scope.evaluatePlay = function(){
              $scope.sendData($scope.projectDataReceived);

              //console.log($scope.data);
              //$scope.testing = $scope.briscas_service.sendData($scope.projectDataReceived);
              //console.log($scope.testing);

          }

          $scope.clearBoard = function(){
            //determine who wins the round...
            //for now this function will randomly determine a winner for testing
            //for now it will not works
            if(!$scope.two_v_two){
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
            }
            /*
            else{
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);

              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
            }
            */

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
            if(!$scope.two_v_two){
              if(turn1){
                if($scope.stack.length > 1){
                  //draw for both hands
                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";
                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";
                  $scope.hand2.push($scope.life);
                  $scope.hand2[2].Player = "player2";

                }else{
                  stack_is_empty = true;
                }
              }
              else if(turn2){
                if($scope.stack.length > 1){
                  //draw for both hands
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";
                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";
                  $scope.hand1.push($scope.life);
                  $scope.hand1[2].Player = "player1";

                }else{
                  stack_is_empty = true;
                }
              }
            }
            /*
            else{
              if(turn1){
                if($scope.stack.length > 1){
                  //draw for all hands
                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";
                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";
                  $scope.hand2.push($scope.life);
                  $scope.hand2[2].Player = "player2";

                }else{
                  stack_is_empty = true;
                }
              }
              else if(turn2){
                if($scope.stack.length > 3){
                  //draw for both hands
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";
                }
                else if($scope.stack.length > 2){
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";
                }

                else if ($scope.stack.length > 1) {
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";
                  $scope.hand4.push($scope.life);
                  $scope.hand4[2].Player = "player4";

                }else{
                  stack_is_empty = true;
                }
              }
              else if (turn3) {
                if($scope.stack.length > 3){
                  //draw for both hands
                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";


                }
                else if($scope.stack.length > 2){
                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";
                }
                else if($scope.stack.length > 1){
                  //draw for both hands
                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";
                  $scope.hand2.push($scope.life);
                  $scope.hand2[2].Player = "player2";

                }else{
                  stack_is_empty = true;
                }
              }
              else if (turn4) {
                if($scope.stack.length > 3){
                  //draw for both hands

                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";

                  $scope.hand2.push($scope.stack.pop());
                  $scope.hand2[2].Player = "player2";

                }
                else if($scope.stack.length > 2){
                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                  $scope.hand3.push($scope.stack.pop());
                  $scope.hand3[2].Player = "player3";


                }
                else if($scope.stack.length > 1){
                  //draw for both hands
                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";

                  $scope.hand1.push($scope.stack.pop());
                  $scope.hand1[2].Player = "player1";

                }
                else if($scope.stack.length == 1){
                  //draw for one hand
                  //tomar la vida y si no hay vida entonces una mano coge solamente
                  $scope.hand4.push($scope.stack.pop());
                  $scope.hand4[2].Player = "player4";
                  $scope.hand1.push($scope.life);
                  $scope.hand1[2].Player = "player1";

                }else{
                  stack_is_empty = true;
                }
              }
            }
            */
          }

          $scope.updateScores = function(winner,score){

            if(winner.player == "player1"){
              alert("Player1 won this hand.");
              $scope.score1 += score;
            }
            else if(winner.player == "player2"){
              alert("Player2 won this hand.");
              $scope.score2 += score;
            }
            /*
            else if(winner.player == "player3"){
              alert("Player3 won this hand.");
              $scope.score3 += score;
            }
            else if(winner.player == "player4"){
              alert("Player4 won this hand.");
              $scope.score4 += score;
            }
            */

          }
          $scope.projectDataReceived = function(data){
            $scope.data_received = data[0];
            $scope.total_score = data[1];
          //determinar turnos
          $scope.updateScores($scope.data_received,$scope.total_score);
          setTimeout(function(){
          $scope.clearBoard();
          $scope.$apply();
        }, 500);
          $scope.drawCard();
          $scope.determineTurns($scope.data_received.player);

          }


          $scope.sendData = function(callback){

            $scope.data = {
              cards_in_play: JSON.stringify($scope.cards),
              //agent1_cards: $scope.hand1,
              //played_cards: $scope.played_cards,

            };
            $scope.briscas_service.sendData($scope.data.cards_in_play,callback);

          }

          $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
              //you also get the actual event object
              //do stuff, execute functions -- whatever...
              if(!$scope.two_v_two){
                if($scope.cards_in_play.length > 1){
                  //$scope.evaluatePlay();
                  $scope.sendData($scope.projectDataReceived);
                  //$scope.drawCard();
              }
            }
            /*
            else{
                if($scope.cards_in_play.length > 3){
                  //$scope.evaluatePlay();
                  $scope.sendData($scope.projectDataReceived);
                }
          }
          */

          });

      });
