from copy import deepcopy
from random import randint, random, shuffle, choice
import math

suits = ["Espada", "Copa", "Oro", "Bastos"]
values = {"As": 11, "Dos": 0, "Tres": 10, "Cuatro": 0, "Cinco": 0,"Seis": 0, "Siete": 0, "Sota": 2, "Caballero": 3, "Rey": 4}
ranks = {"As": 0, "Dos": 9, "Tres": 1, "Cuatro": 8, "Cinco": 7,"Seis": 6, "Siete": 5, "Sota": 2, "Caballero": 3, "Rey": 4}


class Card:

    def __init__(self, suit, rank, trump):
        self.suit = suit
        self.rank = ranks.get(rank)
        self.value = values.get(rank)
        self.rank_name = rank
        self.trump = trump

    def set_trump(self):
        self.trump = True

    def get_value(self):
        return self.value

    def get_trump(self):
        return self.trump

    def get_rank(self):
        return self.rank

    def get_suit(self):
        return self.suit

    def get_rank_name(self):
        return self.rank_name

    def print_card(self):
        print(self.rank_name + " de " + self.suit)


class Deck:

    def __init__(self):
        self.deck = []
        for suit in suits:
            for rank in values:
                self.deck.append(Card(suit,rank, False))

        self.trump_card = self.set_trump()
        for card in self.deck:
            if card.get_suit == self.trump_card.get_suit:
                card.set_trump()

    def __init__(self, cards, trump):
        self.deck = cards
        self.trump_card = trump

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

class BriscaState:
    def __init__ (self,clone,number_of_players, player_to_move, deck, trash, cards_in_play, hand, vida, score1, score2, hand1, hand2):
        if clone == 0:
            self.numberOfPlayers = number_of_players
            self.playerToMove = player_to_move
            self.playerHands = {p: [] for p in range(1, self.numberOfPlayers+1)}
            self.discards = trash
            self.currentCardsInBoard = cards_in_play
            self.deck = deck
            self.vida = vida
            self.playerScore={p:0 for p in range(1, self.numberOfPlayers+1)}
            self.playerHands[self.playerToMove] = hand
            self.playerScore[1] = score1
            self.playerScore[2] = score2
            self.Gen_Deal(hand1,hand2)
        #self.Deal()
        else:
            self.numberOfPlayers = 2
            self.playerToMove = 1
            self.playerHands = {p: [] for p in range(1, self.numberOfPlayers+1)}
            self.discards = []
            self.currentCardsInBoard = []
            self.deck = []
            self.vida = None
            self.playerScore={p:0 for p in range(1, self.numberOfPlayers+1)}


    def Gen_Deal(self,hand1,hand2):
        ai = self.playerToMove
        if ai == 1:
            for i in range(0,hand2):
                if len(self.deck.get_deck())!=0:
                    self.playerHands[2].append(self.deck.hand_card())
        else:
            for j in range(0,hand1):
                if len(self.deck.get_deck())!=0:
                    self.playerHands[1].append(self.deck.hand_card())
#class BriscaState:
    #def __init__ (self, n):
        #self.numberOfPlayers = n
        #self.playerToMove = 1
        #self.playerHands = {p: [] for p in range(1, self.numberOfPlayers+1)}
        #self.discards = []
        #self.currentCardsInBoard = []
        #self.deck = []
        #self.vida = None
        #self.playerScore={p:0 for p in range(1, self.numberOfPlayers+1)}
        #self.Deal()

    def Clone(self):
        clone = 1
        st = BriscaState(clone,self.numberOfPlayers, self.playerToMove, self.deck, self.discards, self.currentCardsInBoard, self.playerHands[self.playerToMove], self.vida, self.playerScore[1], self.playerScore[2], self.playerHands[1], self.playerHands[2])
        #st = BriscaState()
        st.playerToMove = self.playerToMove
        st.playerHands = deepcopy(self.playerHands)
        st.discards = deepcopy(self.discards)
        st.currentCardsInBoard = deepcopy(self.currentCardsInBoard)
        st.deck = deepcopy(self.deck)
        st.vida = self.vida
        st.playerScore = deepcopy(self.playerScore)
        return st

    def CloneAndRandomize(self, observer):
        st = self.Clone()

        seenCards = st.playerHands[observer] + st.discards + st.currentCardsInBoard + [st.vida]
        unseenCards = [card for card in st.GetCardDeck().get_deck() if card not in seenCards]

        # Deal the unseen cards to the other player
        shuffle(unseenCards)
        for p in range(1, st.numberOfPlayers + 1):
            if p!= observer:
                numCards = len(self.playerHands[p])
                st.playerHands[p] = unseenCards[ : numCards]
                unseenCards = unseenCards[numCards :]
        return st

    def GetCardDeck(self):
        return self.deck

    def GetNextPlayer(self, p):
        return (p % self.numberOfPlayers) + 1

    def Deal(self):
        self.discards = []
        self.currentCardsInBoard = []

        self.deck = Deck()
        shuffle(self.deck.get_deck())
        for p in range(1, self.numberOfPlayers + 1):
            self.playerHands[p].append(self.deck.hand_card())
            self.playerHands[p].append(self.deck.hand_card())
            self.playerHands[p].append(self.deck.hand_card())

        self.vida = self.deck.get_trump()

    def TurnDeal(self):
        for p in range(1, self.numberOfPlayers + 1):
            self.playerHands[p].append(self.deck.hand_card())

    def DoMove(self, move):
        # place card on board
        #print("Player To Move:" + str(self.playerToMove))
        #move.print_card()
        self.currentCardsInBoard.append((self.playerToMove,move))

        # remove card from hand
        for card in self.playerHands[self.playerToMove]:
            card_name = card.get_rank_name()
            card_suit = card.get_suit()
            move_name = move.get_rank_name()
            move_suit = move.get_suit()
            if card_name == move_name and card_suit == move_suit:
                self.playerHands[self.playerToMove].remove(card)
                break

        # get next player to move
        self.playerToMove = self.GetNextPlayer(self.playerToMove)

        # If player moved already, hand is over
        if any(True for (player, card) in self.currentCardsInBoard if player == self.playerToMove):
            # get winner
            result = self.GetWinner(self.currentCardsInBoard)

            # Update the game state
            self.playerScore[result["player"]] += result["score"]
            self.discards += [card for (player, card) in self.currentCardsInBoard]
            self.currentCardsInBoard = []
            self.playerToMove = result["player"]

            if len(self.deck.get_deck()) != 0:
                self.TurnDeal()

    def GetMoves(self):
        hand = self.playerHands[self.playerToMove]
        return hand

    def GetResult(self, player):
        # Get Player scores
        score1 = self.playerScore[player]
        score2 = self.playerScore[self.GetNextPlayer(player)]

        # Compare player score and return conclusion
        if score1 > score2:
            return 1
        else:
            return 0


    def GetWinner(self, played_cards):
        trumps_played = []
        max_card = None
        winner = None

        for card in played_cards:
            if card[1].get_trump() == 'True':
                trumps_played.append(card)

        if len(trumps_played) == 0:
            max_card = played_cards[0]
            for card in played_cards:
                if card[1].get_suit() == max_card[1].get_suit() and card[1].get_rank() < max_card[1].get_rank():
                    max_card = card

        elif len(trumps_played) == 1:
            max_card = trumps_played[0]

        else:
            max_card = trumps_played[0]
            for card in trumps_played:
                if card[1].get_rank() < max_card[1].get_rank():
                    max_card = card

        score = GetHandScore(played_cards)
        result = {"card": max_card, "player": max_card[0], "score": score}

        return result


class Node:
    def __init__(self, move = None, parent = None, playerJustMoved = None):
        self.move = move
        self.parentNode= parent
        self.childNodes = []
        self.wins = 0
        self.visits = 0
        self.avails = 1
        self.playerJustMoved = playerJustMoved

    def GetUntriedMoves(self, legalMoves):
        triedMoves = [child.move for child in self.childNodes]

        return [move for move in legalMoves if move not in triedMoves]

    def UCBSelectChild(self, legalMoves, exploration = 0.7):
        legalChildren = [child for child in self.childNodes if child.move in legalMoves]
        s = max(legalChildren, key = lambda c: float(c.wins)/float(c.visits) + exploration * math.sqrt(math.log(c.avails)/float(c.visits)))

        for child in legalChildren:
            child.avails += 1

        return s

    def AddChild(self, m, p):
        n = Node(move = m, parent = self, playerJustMoved = p)
        self.childNodes.append(n)
        return n

    def Update(self, terminalState):
        self.visits += 1
        if self.playerJustMoved is not None:
            #self.wins += terminalState.GetResult(self.playerJustMoved)
            max_score = max(terminalState.playerScore.values())
            for player, score in terminalState.playerScore.items():
                if score == max_score:
                    self.wins += score
                    break

state = None


def ISMCTS(rootstate, itermax):
    rootnode = Node()


    for i in range(itermax):
        node = rootnode

        #Determinize
        state = rootstate.CloneAndRandomize(rootstate.playerToMove)

        #Select
        while state.GetMoves() != [] and node.GetUntriedMoves(state.GetMoves()) == []:
            node = node.UCBSelectChild(state.GetMoves())
            state.DoMove(node.move)

        #Expand
        untriedMoves = node.GetUntriedMoves(state.GetMoves())
        if untriedMoves != []:
            m = choice(untriedMoves)
            player = state.playerToMove
            state.DoMove(m)
            node = node.AddChild(m, player)

        #Simulate
        while state.GetMoves() != []:
            state.DoMove(choice(state.GetMoves()))

        #Backpropagate
        while node != None:
            node.Update(state)
            node = node.parentNode

    return max(rootnode.childNodes, key=lambda c: c.visits).move

def get_move(r_state):
    game = r_state

    #while(game.GetMoves() != []):
    if r_state.playerToMove == 1:
        move = ISMCTS(rootstate = game, itermax = 1000)
    else:
        move = ISMCTS(rootstate = game, itermax = 100)
    return game.playerToMove, move

# TO DO
def PlayGame(r_state):
    game = r_state

    while(game.GetMoves() != []):
        if r_state.playerToMove == 1:
            move = ISMCTS(rootstate = game, itermax = 1000)
        else:
            move = ISMCTS(rootstate = game, itermax = 100)
        print("Player to Move: " + str(game.playerToMove))
        print("Card Played: ")
        move.print_card()
        game.DoMove(move)

    if game.playerScore[1] > game.playerScore[2]:
        gameEndMessage = "Player 1 has won " + str(game.playerScore[1]) + "-" + str(game.playerScore[2]) + "!"
    elif game.playerScore[1] == game.playerScore[2]:
        gameEndMessage = "The Game is a Tie " + str(game.playerScore[1]) + "-" + str(game.playerScore[2])+ "!"
    else:
        gameEndMessage = "Player 2 has won " + str(game.playerScore[1]) + "-" + str(game.playerScore[2])+ "!"


    print(gameEndMessage)

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
            if card['suit'] == max_card['suit'] and card['rank'] < max_card['rank']:
                max_card = card

    elif len(trumps_played) == 1:
        max_card = trumps_played[0]

    else:
        max_card = trumps_played[0]
        for card in trumps_played:
            if card['rank'] < max_card['rank']:
                max_card = card
    score = get_hand_score(played_cards)
    result = {"card": max_card, "player": max_card['player'], "score": score}

    return result

def GetHandScore(cards_played):
    score = 0
    for card in cards_played:
        score += card[1].get_value()

    return score

def get_hand_score(cards_played):
    score = 0
    for card in cards_played:
        score += card['value']

    return score


#if __name__ == "__main__":
    #r_state = BriscaState(2)
    #PlayGame(r_state)
