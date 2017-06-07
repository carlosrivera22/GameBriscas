import json
from random import randint
import GLbriscas
from flask import Flask, jsonify, request #import objects from the Flask model
import requests
app = Flask(__name__) #define app using Flask

game_rooms={}

values = {"As": 11, "Dos": 0, "Tres": 10, "Cuatro": 0, "Cinco": 0,"Seis": 0, "Siete": 0, "Sota": 2, "Caballero": 3, "Rey": 4}
ranks = {"As": 0, "Dos": 9, "Tres": 1, "Cuatro": 8, "Cinco": 7,"Seis": 6, "Siete": 5, "Sota": 2, "Caballero": 3, "Rey": 4}

@app.route("/", methods=["GET"])
def test():
    return render_template('index.html')


@app.route('/get_winner', methods=["POST"])
def get_winner():

    if request.method == "POST":
        play_dict = request.get_json()
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
