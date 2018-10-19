class CreateDeck {
  constructor(_id, name, type, suit, value) {
    this._id = _id;
    this.name = name;
    this.type = type;
    this.suit = suit;
    this.value = value;
    this.showFront = false;
  }
}

let deckOfCards = [];
const columns = [];

function pushToArray(array, newItem) {
  array.push(newItem);
}

pushToArray(deckOfCards, new CreateDeck(0, 'King of Hearts', 'king', 'hearts', 13));
pushToArray(deckOfCards, new CreateDeck(1, 'Queen of Hearts', 'queen', 'hearts', 12));
pushToArray(deckOfCards, new CreateDeck(2, 'Jack of Hearts', 'jack', 'hearts', 11));
pushToArray(deckOfCards, new CreateDeck(3, 'Ten of Hearts', 'ten', 'hearts', 10));
pushToArray(deckOfCards, new CreateDeck(4, 'Nine of Hearts', 'nine', 'hearts', 9));
pushToArray(deckOfCards, new CreateDeck(5, 'Eight of Hearts', 'eight', 'hearts', 8));
pushToArray(deckOfCards, new CreateDeck(6, 'Seven of Hearts', 'seven', 'hearts', 7));
pushToArray(deckOfCards, new CreateDeck(7, 'Six of Hearts', 'six', 'hearts', 6));
pushToArray(deckOfCards, new CreateDeck(8, 'Five of Hearts', 'five', 'hearts', 5));
pushToArray(deckOfCards, new CreateDeck(9, 'Four of Hearts', 'four', 'hearts', 4));
pushToArray(deckOfCards, new CreateDeck(10, 'Three of Hearts', 'three', 'hearts', 3));
pushToArray(deckOfCards, new CreateDeck(11, 'Two of Hearts', 'two', 'hearts', 2));
pushToArray(deckOfCards, new CreateDeck(12, 'Ace of Hearts', 'ace', 'hearts', 1));

pushToArray(deckOfCards, new CreateDeck(13, 'King of Diamonds', 'king', 'diamonds', 13));
pushToArray(deckOfCards, new CreateDeck(14, 'Queen of Diamonds', 'queen', 'diamonds', 12));
pushToArray(deckOfCards, new CreateDeck(15, 'Jack of Diamonds', 'jack', 'diamonds', 11));
pushToArray(deckOfCards, new CreateDeck(16, 'Ten of Diamonds', 'ten', 'diamonds', 10));
pushToArray(deckOfCards, new CreateDeck(17, 'Nine of Diamonds', 'nine', 'diamonds', 9));
pushToArray(deckOfCards, new CreateDeck(18, 'Eight of Diamonds', 'eight', 'diamonds', 8));
pushToArray(deckOfCards, new CreateDeck(19, 'Seven of Diamonds', 'seven', 'diamonds', 7));
pushToArray(deckOfCards, new CreateDeck(20, 'Six of Diamonds', 'six', 'diamonds', 6));
pushToArray(deckOfCards, new CreateDeck(21, 'Five of Diamonds', 'five', 'diamonds', 5));
pushToArray(deckOfCards, new CreateDeck(22, 'Four of Diamonds', 'four', 'diamonds', 4));
pushToArray(deckOfCards, new CreateDeck(23, 'Three of Diamonds', 'three', 'diamonds', 3));
pushToArray(deckOfCards, new CreateDeck(24, 'Two of Diamonds', 'two', 'diamonds', 2));
pushToArray(deckOfCards, new CreateDeck(25, 'Ace of Diamonds', 'ace', 'diamonds', 1));

pushToArray(deckOfCards, new CreateDeck(26, 'King of Spades', 'king', 'spades', 13));
pushToArray(deckOfCards, new CreateDeck(27, 'Queen of Spades', 'queen', 'spades', 12));
pushToArray(deckOfCards, new CreateDeck(28, 'Jack of Spades', 'jack', 'spades', 11));
pushToArray(deckOfCards, new CreateDeck(29, 'Ten of Spades', 'ten', 'spades', 10));
pushToArray(deckOfCards, new CreateDeck(30, 'Nine of Spades', 'nine', 'spades', 9));
pushToArray(deckOfCards, new CreateDeck(31, 'Eight of Spades', 'eight', 'spades', 8));
pushToArray(deckOfCards, new CreateDeck(32, 'Seven of Spades', 'seven', 'spades', 7));
pushToArray(deckOfCards, new CreateDeck(33, 'Six of Spades', 'six', 'spades', 6));
pushToArray(deckOfCards, new CreateDeck(34, 'Five of Spades', 'five', 'spades', 5));
pushToArray(deckOfCards, new CreateDeck(35, 'Four of Spades', 'four', 'spades', 4));
pushToArray(deckOfCards, new CreateDeck(36, 'Three of Spades', 'three', 'spades', 3));
pushToArray(deckOfCards, new CreateDeck(37, 'Two of Spades', 'two', 'spades', 2));
pushToArray(deckOfCards, new CreateDeck(38, 'Ace of Spades', 'ace', 'spades', 1));

pushToArray(deckOfCards, new CreateDeck(39, 'King of Clubs', 'king', 'clubs', 13));
pushToArray(deckOfCards, new CreateDeck(40, 'Queen of Clubs', 'queen', 'clubs', 12));
pushToArray(deckOfCards, new CreateDeck(41, 'Jack of Clubs', 'jack', 'clubs', 11));
pushToArray(deckOfCards, new CreateDeck(42, 'Ten of Clubs', 'ten', 'clubs', 10));
pushToArray(deckOfCards, new CreateDeck(43, 'Nine of Clubs', 'nine', 'clubs', 9));
pushToArray(deckOfCards, new CreateDeck(44, 'Eight of Clubs', 'eight', 'clubs', 8));
pushToArray(deckOfCards, new CreateDeck(45, 'Seven of Clubs', 'seven', 'clubs', 7));
pushToArray(deckOfCards, new CreateDeck(46, 'Six of Clubs', 'six', 'clubs', 6));
pushToArray(deckOfCards, new CreateDeck(47, 'Five of Clubs', 'five', 'clubs', 5));
pushToArray(deckOfCards, new CreateDeck(48, 'Four of Clubs', 'four', 'clubs', 4));
pushToArray(deckOfCards, new CreateDeck(49, 'Three of Clubs', 'three', 'clubs', 3));
pushToArray(deckOfCards, new CreateDeck(50, 'Two of Clubs', 'two', 'clubs', 2));
pushToArray(deckOfCards, new CreateDeck(51, 'Ace of Clubs', 'ace', 'clubs', 1));

const shuffleCards = () => {
  deckOfCards = deckOfCards.sort(() => .5 - Math.random());
};

shuffleCards();
console.log('The shuffled deck is', deckOfCards);
// TODO: add 'assigned cards' array to this. When a card is assigned, filter it from deckOfCards
class CreateColumns {
  constructor(id, name, initialNumber, xPosition, cards) {
    this.id = id;
    this.name = name;
    this.initialNumber = initialNumber;
    this.xPosition = xPosition;
    this.cards = cards;
  }
}

pushToArray(columns, new CreateColumns(1, 'column 1', 1, 10, []));
pushToArray(columns, new CreateColumns(2, 'column 2', 2, 20, []));
pushToArray(columns, new CreateColumns(3, 'column 3', 3, 30, []));
pushToArray(columns, new CreateColumns(4, 'column 4', 4, 40, []));
pushToArray(columns, new CreateColumns(5, 'column 5', 5, 50, []));
pushToArray(columns, new CreateColumns(6, 'column 6', 6, 60, []));
pushToArray(columns, new CreateColumns(7, 'column 7', 7, 70, []));

console.log('Columns are', columns);
$(() => {
  const $columnsContainer = $('.columns-container');

  // $columnsContainer.append($('<div>Wew</div>'));

  columns.forEach(column => {
    // const $newColumn = `<div>${column.id}</div>`;
    const $column = $(`<div class=${column.name} style="left: ${column.xPosition}%">${column.id}</div>`);
    $columnsContainer.append($column);
  });
});



// TODO: after lunch, go back to original plan so splat indices array and just get rid of this shit from the cardsInDeck array. Get a random number up to that array's length, and use that as the index to of cardsInDeck[randomNumber].id. This id is the random number. Then splat that card from the array.


//TODO: do a sort instead, essentially you're shuffling the order of the cards and sticking the first however many in.
