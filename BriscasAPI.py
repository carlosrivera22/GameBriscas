import json
from random import randint
import GLbriscas
from flask import Flask, jsonify, request,render_template #import objects from the Flask model
import requests
app = Flask(__name__) #define app using Flask

game_rooms={}

values = {"As": 11, "Dos": 0, "Tres": 10, "Cuatro": 0, "Cinco": 0,"Seis": 0, "Siete": 0, "Sota": 2, "Caballero": 3, "Rey": 4}
ranks = {"As": 0, "Dos": 9, "Tres": 1, "Cuatro": 8, "Cinco": 7,"Seis": 6, "Siete": 5, "Sota": 4, "Caballero": 3, "Rey": 2}
numbers = {"As": 1, "Dos": 2, "Tres": 3, "Cuatro": 4, "Cinco": 5,"Seis": 6, "Siete": 7, "Sota": 10, "Caballero":11 , "Rey": 12}

@app.route("/", methods=["GET"])
def test():
    return render_template('index.html')


@app.route('/get_winner', methods=["POST"])
def get_winner():

    if request.method == "POST":
        play_dict = request.get_json(force=True, silent=True)
        #print(play_dict)
        cards_number = len(play_dict)
        #print(cards_number)
        cards_played = []

        for i in range(0,cards_number+1):
            card_obj = {'suit': play_dict['cards'][i]['denominacion'], 'rank': ranks[play_dict['cards'][i]['nombre']], 'value': values[play_dict['cards'][i]['nombre']], 'player': play_dict['cards'][i]['Player'], 'trump': play_dict['cards'][i]['vida']}
            cards_played.append(card_obj)
        #print(cards_played)
        score = GLbriscas.get_hand_score(cards_played)
        winner = GLbriscas.get_hand_winner(cards_played)
        result = winner,score
        print(result)
        return jsonify(result)
    else:

        return """<html><body>
        Something went horribly wrong
        </body></html>"""


@app.route("/create_room/<string:player_name>/<string:game_mode>/<string:black_hand>/<string:swap>")
def create_room(player_name,game_mode,black_hand,swap):
    room = GLbriscas.room_generator(game_mode,black_hand,swap,player_name)
    room_id = str(room.get_room_id())
    game_rooms[room_id]=room
    return json.dumps(room, default=lambda o: o.__dict__)


@app.route("/get_players/<string:room_id>")
def get_players(room_id):
    if room_id in game_rooms:
        return json.dumps(game_rooms[room_id].get_players(), default=lambda o: o.__dict__)
    else:
        return jsonify({"message": "Room not found!"})


@app.route("/play_card/<string:room_id>/<int:player>/<int:card>")
def play_card(room_id, player, card):
    if room_id in game_rooms:
        room = game_rooms[room_id]
        card_played = room.get_players()[player].play_card(card)
        play = player,card_played
        room.add_play(card_played, player)
        return json.dumps(play, default=lambda o: o.__dict__)
    else:
        return jsonify({"message": "Room not found!"})

@app.route("/get_play", methods=["POST"])
def get_play():
    if request.method == "POST":
        play_dict = request.get_json(force=True, silent=True)
        number_of_players = play_dict["number_of_players"]
        player_to_move = play_dict["player_to_move"]
        score1 = play_dict["score1"]
        score2 = play_dict["score2"]
        hand1 = play_dict["hand1"]
        hand2 = play_dict["hand2"]
        json_deck = play_dict["deck"]
        json_trash = play_dict["trash"]
        json_hand = play_dict["hand"]
        json_vida = play_dict["vida"]
        json_cards_in_play = play_dict["cards_in_play"]["cards"]
        card_array = []
        hand = []
        cards_in_play = []
        trash = []
        vida = GLbriscas.Card(json_vida["denominacion"], json_vida["nombre"], json_vida["vida"])
        for card in json_deck:
            card_array.append(GLbriscas.Card(card["denominacion"], card["nombre"], card["vida"]))
        for card in json_hand:
            hand.append(GLbriscas.Card(card["denominacion"], card["nombre"], card["vida"]))
        for card in json_trash:
            trash.append(GLbriscas.Card(card["denominacion"], card["nombre"], card["vida"]))
        for card in json_cards_in_play:
            cards_in_play.append((int(card["Player"][6]),GLbriscas.Card(card["denominacion"], card["nombre"], card["vida"])))
        deck = GLbriscas.Deck(card_array,vida)
        clone = 0

        r_state = GLbriscas.BriscaState(clone,number_of_players, player_to_move, deck, trash, cards_in_play, hand, vida, score1, score2, hand1, hand2)
        move = GLbriscas.get_move(r_state)
        path = "static/img/"+ move[1].get_suit() + str(numbers[move[1].get_rank_name()]) + ".gif"
        winner = {"player":move[0],"card":{"Player": move[0], "nombre":move[1].get_rank_name(), "path":path, "vida": move[1].get_trump(),"denominacion": move[1].get_suit()}}
        #print(move)
        return jsonify(winner)
    else:
        return jsonify({"message": "play not found!"})

@app.route("/random_play/<string:room_id>/<int:player>")
def random_play(room_id, player):
    if room_id in game_rooms:
        room = game_rooms[room_id]
        card = randint(0,3)
        card_played = room.get_players()[player].play_card(card)
        play = player,card_played
        room.add_play(card_played, player)
        return json.dumps(play, default=lambda o: o.__dict__)
    else:
        return jsonify({"message": "Room not found!"})


#@app.route("/get_winner/<string:room_id>")
#def get_winner(room_id):
    #if room_id in game_rooms:
        #room = game_rooms[room_id]
        #winner = room.get_winner()
        #return json.dumps(winner, default=lambda o: o.__dict__)
    #else:
        #return jsonify({"message": "Room not found!"})


if __name__ == "__main__":
    app.run(debug=True, port=8080) #run app on port 8080 in debug mode
