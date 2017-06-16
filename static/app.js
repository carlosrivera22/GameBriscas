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
              path:"static/img/Copa1.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Copa2.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Copa3.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Copa4.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Copa5.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Copa6.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Copa7.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Copa10.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Copa11.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Copa12.gif",
              vida: "False",
              denominacion: "Copa",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Espada1.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Espada2.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Espada3.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Espada4.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Espada5.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Espada6.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Espada7.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Espada10.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Espada11.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Espada12.gif",
              vida: "False",
              denominacion: "Espada",

            },
            {
              Player: "",
              nombre:"As",
              path:"static/img/Oro1.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Dos",
              path:"static/img/Oro2.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Tres",
              path:"static/img/Oro3.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Cuatro",
              path:"static/img/Oro4.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Cinco",
              path:"static/img/Oro5.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Seis",
              path:"static/img/Oro6.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Siete",
              path:"static/img/Oro7.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Sota",
              path:"static/img/Oro10.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Caballero",
              path:"static/img/Oro11.gif",
              vida: "False",
              denominacion: "Oro",

            },
            {
              Player: "",
              nombre:"Rey",
              path:"static/img/Oro12.gif",
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
          $scope.cards = {
            cards: $scope.play,
          };
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
            card = {
              Player: "",
              nombre:"",
              path:"",
              vida: "",
              denominacion: "",
            };
            $scope.sendGameData($scope.playReceived)

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

          }

          $scope.getHand4 = function(){
            for(i=0;i<3;i++){
              $scope.hand4.push($scope.stack.pop());
              $scope.hand4[i].Player = "player4";
            }
          }

          $scope.makePlay = function(card){

            $scope.cards_in_play.push(card);
            $scope.play.push({
                Player: card.Player,
                denominacion: card.denominacion,
                nombre: card.nombre,
                vida: card.vida,
              })
              $scope.cards = {
                cards: $scope.play,
              }

               $scope.switchTurns();
                if(turn1){
                  $scope.removeCard($scope.hand1,card);
                  console.log($scope.hand1);
                }else{
                  $scope.removeCard($scope.hand2,card);

                }

                  setTimeout(function(){
                    $scope.sendGameData($scope.playReceived)
                  $scope.$apply();
                }, 1000);


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

          }

          $scope.clearBoard = function(){

            if(!$scope.two_v_two){
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
              $scope.played_cards.push($scope.cards_in_play[0]);
              $scope.removeCard($scope.play,$scope.play[0]);
              $scope.removeCard($scope.cards_in_play,$scope.cards_in_play[0]);
            }
              if($scope.hand1.length == 0 && $scope.hand2.length == 0 ) {
                if($scope.score1 > $scope.score2){
                  alert("Player 1 wins!");
                }
                else if($scope.score1 < $scope.score2){
                  alert("Player 2 wins!");
                }
                else{
                  alert("Tied Game! It's a draw.")
                }
              }
          }


          $scope.deckIsNotEmpty = function(){
            return !stack_is_empty;
          }


          $scope.drawCard = function(){

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


          }

          $scope.updateScores = function(winner,score){

            if(winner.player == "player1"){
              setTimeout(function(){
              alert("Player1 won this hand.");
              $scope.$apply();
            }, 1000);

              $scope.score1 += score;
            }
            else if(winner.player == "player2"){
              setTimeout(function(){
              alert("Player2 won this hand.");
              $scope.$apply();
            }, 1000);
              $scope.score2 += score;
            }

          }

          $scope.playReceived = function(data){

              for(i=0;i<$scope.hand2.length;i++){
                if(data.card.path == $scope.hand2[i].path){
                  $scope.makePlay($scope.hand2[i]);

                }
              }

              for(j=0;j<$scope.hand1.length;j++){
                if(data.card.path == $scope.hand1[j].path){
                  $scope.makePlay($scope.hand1[j]);

                }
              }


            }

          $scope.projectDataReceived = function(data){
            $scope.data_received = data[0];
            $scope.total_score = data[1];
            //determinar turnos
            $scope.updateScores($scope.data_received,$scope.total_score);

            setTimeout(function(){
            $scope.clearBoard();
            $scope.$apply();
          }, 1000);
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

          $scope.sendGameData = function(callback){

            var unplayed_cards = $scope.stack.concat($scope.hand2);
            var score, hand, player;
            for(i=0;i<unplayed_cards.length;i++){
              unplayed_cards.player = "";
            }
            if(turn1){
              $scope.game_data = {
                number_of_players: 2,
                deck: unplayed_cards,
                trash: $scope.played_cards,
                cards_in_play: $scope.cards,
                hand: $scope.hand2,
                hand1: $scope.hand1.length,
                hand2: $scope.hand2.length,
                player_score: $scope.score2,
                vida: $scope.life,
                score1: $scope.score1,
                score2: $scope.score2,
                player_to_move: 2,
              }
            }

            if(turn2){
              $scope.game_data = {
                number_of_players: 2,
                deck: unplayed_cards,
                trash: $scope.played_cards,
                cards_in_play: $scope.cards,
                hand: $scope.hand1,
                hand1: $scope.hand1.length,
                hand2: $scope.hand2.length,
                player_score: $scope.score1,
                vida: $scope.life,
                score1: $scope.score1,
                score2: $scope.score2,
                player_to_move: 1,
              }
            }




            $scope.agent_data = {
              data: JSON.stringify($scope.game_data),
            }
            console.log($scope.agent_data);
            $scope.briscas_service.sendAgentData($scope.agent_data.data,callback)
          }


          $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
              //you also get the actual event object
              //do stuff, execute functions -- whatever...
                if($scope.cards_in_play.length == 2){
                  $scope.sendData($scope.projectDataReceived);
                }


          });


      });
