class CreateDeck {
  constructor(name, type, suit, value) {
    this.name = name;
    this.type = type;
    this.suit = suit;
    this.value = value;
  }
}

const deckOfCards = [];
const columns = [];

function pushToArray(array, newItem) {
  array.push(newItem);
}

pushToArray(deckOfCards, new CreateDeck('King of Hearts', 'king', 'hearts', 13));
pushToArray(deckOfCards, new CreateDeck('Queen of Hearts', 'queen', 'hearts', 12));
pushToArray(deckOfCards, new CreateDeck('Jack of Hearts', 'jack', 'hearts', 11));
pushToArray(deckOfCards, new CreateDeck('Ten of Hearts', 'ten', 'hearts', 10));
pushToArray(deckOfCards, new CreateDeck('Nine of Hearts', 'nine', 'hearts', 9));
pushToArray(deckOfCards, new CreateDeck('Eight of Hearts', 'eight', 'hearts', 8));
pushToArray(deckOfCards, new CreateDeck('Seven of Hearts', 'seven', 'hearts', 7));
pushToArray(deckOfCards, new CreateDeck('Six of Hearts', 'six', 'hearts', 6));
pushToArray(deckOfCards, new CreateDeck('Five of Hearts', 'five', 'hearts', 5));
pushToArray(deckOfCards, new CreateDeck('Four of Hearts', 'four', 'hearts', 4));
pushToArray(deckOfCards, new CreateDeck('Three of Hearts', 'three', 'hearts', 3));
pushToArray(deckOfCards, new CreateDeck('Two of Hearts', 'two', 'hearts', 2));
pushToArray(deckOfCards, new CreateDeck('Ace of Hearts', 'ace', 'hearts', 1));

pushToArray(deckOfCards, new CreateDeck('King of Diamonds', 'king', 'diamonds', 13));
pushToArray(deckOfCards, new CreateDeck('Queen of Diamonds', 'queen', 'diamonds', 12));
pushToArray(deckOfCards, new CreateDeck('Jack of Diamonds', 'jack', 'diamonds', 11));
pushToArray(deckOfCards, new CreateDeck('Ten of Diamonds', 'ten', 'diamonds', 10));
pushToArray(deckOfCards, new CreateDeck('Nine of Diamonds', 'nine', 'diamonds', 9));
pushToArray(deckOfCards, new CreateDeck('Eight of Diamonds', 'eight', 'diamonds', 8));
pushToArray(deckOfCards, new CreateDeck('Seven of Diamonds', 'seven', 'diamonds', 7));
pushToArray(deckOfCards, new CreateDeck('Six of Diamonds', 'six', 'diamonds', 6));
pushToArray(deckOfCards, new CreateDeck('Five of Diamonds', 'five', 'diamonds', 5));
pushToArray(deckOfCards, new CreateDeck('Four of Diamonds', 'four', 'diamonds', 4));
pushToArray(deckOfCards, new CreateDeck('Three of Diamonds', 'three', 'diamonds', 3));
pushToArray(deckOfCards, new CreateDeck('Two of Diamonds', 'two', 'diamonds', 2));
pushToArray(deckOfCards, new CreateDeck('Ace of Diamonds', 'ace', 'diamonds', 1));

pushToArray(deckOfCards, new CreateDeck('King of Spades', 'king', 'spades', 13));
pushToArray(deckOfCards, new CreateDeck('Queen of Spades', 'queen', 'spades', 12));
pushToArray(deckOfCards, new CreateDeck('Jack of Spades', 'jack', 'spades', 11));
pushToArray(deckOfCards, new CreateDeck('Ten of Spades', 'ten', 'spades', 10));
pushToArray(deckOfCards, new CreateDeck('Nine of Spades', 'nine', 'spades', 9));
pushToArray(deckOfCards, new CreateDeck('Eight of Spades', 'eight', 'spades', 8));
pushToArray(deckOfCards, new CreateDeck('Seven of Spades', 'seven', 'spades', 7));
pushToArray(deckOfCards, new CreateDeck('Six of Spades', 'six', 'spades', 6));
pushToArray(deckOfCards, new CreateDeck('Five of Spades', 'five', 'spades', 5));
pushToArray(deckOfCards, new CreateDeck('Four of Spades', 'four', 'spades', 4));
pushToArray(deckOfCards, new CreateDeck('Three of Spades', 'three', 'spades', 3));
pushToArray(deckOfCards, new CreateDeck('Two of Spades', 'two', 'spades', 2));
pushToArray(deckOfCards, new CreateDeck('Ace of Spades', 'ace', 'spades', 1));

pushToArray(deckOfCards, new CreateDeck('King of Clubs', 'king', 'clubs', 13));
pushToArray(deckOfCards, new CreateDeck('Queen of Clubs', 'queen', 'clubs', 12));
pushToArray(deckOfCards, new CreateDeck('Jack of Clubs', 'jack', 'clubs', 11));
pushToArray(deckOfCards, new CreateDeck('Ten of Clubs', 'ten', 'clubs', 10));
pushToArray(deckOfCards, new CreateDeck('Nine of Clubs', 'nine', 'clubs', 9));
pushToArray(deckOfCards, new CreateDeck('Eight of Clubs', 'eight', 'clubs', 8));
pushToArray(deckOfCards, new CreateDeck('Seven of Clubs', 'seven', 'clubs', 7));
pushToArray(deckOfCards, new CreateDeck('Six of Clubs', 'six', 'clubs', 6));
pushToArray(deckOfCards, new CreateDeck('Five of Clubs', 'five', 'clubs', 5));
pushToArray(deckOfCards, new CreateDeck('Four of Clubs', 'four', 'clubs', 4));
pushToArray(deckOfCards, new CreateDeck('Three of Clubs', 'three', 'clubs', 3));
pushToArray(deckOfCards, new CreateDeck('Two of Clubs', 'two', 'clubs', 2));
pushToArray(deckOfCards, new CreateDeck('Ace of Clubs', 'ace', 'clubs', 1));

console.log('The array is', deckOfCards);

const randomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];

console.log('A random card is', randomCard);


class CreateColumns {
  constructor(id, name, initialNumber, xPosition) {
    this.id = id;
    this.name = name;
    this.initialNumber = initialNumber;
    this.xPosition = xPosition;
  }
}

pushToArray(columns, new CreateColumns(1, 'column 1', 1, 10));

console.log('Columns are', columns);
