from random import randint

suits = ["Espada", "Copa", "Oro", "Bastos"]
values = {"As": 11, "Dos": 0, "Tres": 10, "Cuatro": 0, "Cinco": 0,"Seis": 0, "Siete": 0, "Sota": 2, "Caballero": 3, "Rey": 4}
ranks = {"As": 0, "Dos": 9, "Tres": 1, "Cuatro": 8, "Cinco": 7,"Seis": 6, "Siete": 5, "Sota": 2, "Caballero": 3, "Rey": 4}


class Card:

    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = ranks.get(rank)
        self.value = values.get(rank)
        self.rank_name = rank

    def get_value(self):
        return self.value

    def get_rank(self):
        return self.rank

    def get_suit(self):
        return self.suit

    def get_rank_name(self):
        return self.rank_name

    def print_card(self):
        print(self.rank_name + "de" + self.suit)


class Deck:

    def __init__(self):
        self.deck = []
        for suit in suits:
            for rank in values:
                self.deck.append(Card(suit,rank))

        self.trump_card = self.set_trump()

    def get_deck(self):
        return self.deck

    def hand_card(self):
        if len(self.deck) == 0:
            return self.trump_card
        else:
            card= randint(0,len(self.deck)-1)
            new_card= self.deck[card]
            del(self.deck[card])
        return new_card

    def set_trump(self):
        trump = randint(0,len(self.deck)-1)
        trump_card = self.deck[trump]
        del(self.deck[trump])
        return trump_card

    def change_trump(self, card):
        old_trump = self.trump_card
        self.trump_card = card
        return old_trump

    def get_trump(self):
        return self.trump_card

    def swap_trump(self, card):
        old_trump = self.trump_card
        self.trump_card = card
        return old_trump


class Hand:

    def __init__(self):
        self.hand = []

    def play_card(self, index):
        played_card = self.hand[index]
        del(self.hand[index])
        return played_card

    def get_hand(self):
        return self.hand

    def add_card(self, card):
        self.hand.append(card)

    def black_hand(self, trump_suit):
        black_hand_cards = []
        black_hand_cards.append(Card(trump_suit, "As"))
        black_hand_cards.append(Card(trump_suit, "Tres"))
        black_hand_cards.append(Card(trump_suit, "Rey"))

        for card in black_hand_cards:
            if not self.hand.__contains__(card):
                return False

        return True


class Player:

    def __init__(self, name, hand):
        self.name = name
        self.hand = hand
        self.score = 0
        self.turn = None

    def get_hand(self):
        return self.hand

    def get_name(self):
        return self.name

    def get_score(self):
        return self.score

    def add_points(self, points):
        self.score+= points

    def play_card(self, index):
        return self.hand.play_card(index)

class GameManager:

    def __init__(self):
        self.winner = 0
        self.points = 0
        self.trump_card = None
        self.cards_played = []
        self.play_order = []

    def get_play(self,trump_card,cards_played, play_order):
        self.trump_card = trump_card
        self.cards_played = cards_played
        self.play_order = play_order

    def get_highest_card(self):
        trumps_played = []
        max_card = None
        winner = None

        for card in self.cards_played:
            if card.get_suit() == self.trump_card.get_suit():
                trumps_played.append(card)

        if len(trumps_played) == 0:
            max_card = self.cards_played[0]
            for card in self.cards_played:
                if card.get_suit() == max_card.get_suit() and card.get_rank() > max_card.get_rank():
                    max_card = card

        elif len(trumps_played) == 1:
            max_card = trumps_played[0]

        else:
            max_card = trumps_played[0]
            for card in trumps_played:
                if card.get_rank() > max_card.get_rank():
                    max_card = card

        return max_card, self.play_order[(self.cards_played.index(max_card))]

    def hand_score(self):
        score = 0
        for card in self.cards_played:
            score += card.get_value()

        return score


class GameRoom:
    def __init__(self, game_mode, black_hand, swap, players, deck, room_id):
        self.game_mode = game_mode
        self.black_hand = black_hand
        self.swap = swap
        self.players = players
        self.deck = deck
        self.room_id = room_id
        self.game_manager = GameManager()
        self.play = []
        self.play_order = []

    def get_players(self):
        return self.players

    def get_room_id(self):
        return self.room_id

    def add_play(self, card, player):
        self.play.append(card)
        self.play_order.append(player)

    def get_black_hand(self):
        return self.black_hand

    def get_game_mode(self):
        return self.game_mode

    def get_deck(self):
        return self.game_mode

    def get_swap(self):
        return self.swap

    def get_manager(self):
        return self.game_manager

    def get_winner(self):
        self.game_manager.get_play(self.deck.get_trump(),self.play,self.play_order)
        winner = self.game_manager.get_highest_card()
        score = self.game_manager.hand_score()
        self.play.clear()
        self.play_order.clear()
        return score,winner


def room_generator(game_mode, black_hand, swap, player_name):
    room_id = randint(0,1000)
    players = []
    deck = Deck()
    if game_mode == '1v1':
        players.append(Player(player_name, Hand()))
        players.append(Player('CPU1', Hand()))

    elif game_mode == '2v2' or game_mode == 'FFA':
        players.append(Player(player_name, Hand()))
        players.append(Player('CPU1', Hand()))
        players.append(Player('CPU2', Hand()))
        players.append(Player('CPU3', Hand()))

    for player in players:
        player.get_hand().add_card(deck.hand_card())
        player.get_hand().add_card(deck.hand_card())
        player.get_hand().add_card(deck.hand_card())

    game_room = GameRoom(game_mode, black_hand, swap, players, deck, room_id)

    return game_room


def get_hand_winner(played_cards):
    trumps_played = []
    max_card = None
    winner = None

    for card in played_cards:
        if card['trump'] == 'True':
            trumps_played.append(card)

    if len(trumps_played) == 0:
        max_card = played_cards[0]
        for card in played_cards:
            if card['suit'] == max_card['suit'] and card['rank'] > max_card['rank']:
                max_card = card

    elif len(trumps_played) == 1:
        max_card = trumps_played[0]

    else:
        max_card = trumps_played[0]
        for card in trumps_played:
            if card['rank'] > max_card['rank']:
                max_card = card

    return max_card, max_card['player']

def get_hand_score(cards_played):
    score = 0
    for card in cards_played:
        score += card['value']

    return score





















