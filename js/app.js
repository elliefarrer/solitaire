// IDEA: make the game cheat-proof so the user can't just go into dev tools and see where the unflipped cards are

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

const pushToArray = (array, newItem) => {
  array.push(newItem);
};

pushToArray(deckOfCards, new CreateDeck(0, 'K♥︎', 'king', 'hearts', 13));
pushToArray(deckOfCards, new CreateDeck(1, 'Q♥︎', 'queen', 'hearts', 12));
pushToArray(deckOfCards, new CreateDeck(2, 'J♥︎', 'jack', 'hearts', 11));
pushToArray(deckOfCards, new CreateDeck(3, '10♥︎', 'ten', 'hearts', 10));
pushToArray(deckOfCards, new CreateDeck(4, '9♥︎', 'nine', 'hearts', 9));
pushToArray(deckOfCards, new CreateDeck(5, '8♥︎', 'eight', 'hearts', 8));
pushToArray(deckOfCards, new CreateDeck(6, '7♥︎', 'seven', 'hearts', 7));
pushToArray(deckOfCards, new CreateDeck(7, '6♥︎', 'six', 'hearts', 6));
pushToArray(deckOfCards, new CreateDeck(8, '5♥︎', 'five', 'hearts', 5));
pushToArray(deckOfCards, new CreateDeck(9, '4♥︎', 'four', 'hearts', 4));
pushToArray(deckOfCards, new CreateDeck(10, '3♥︎', 'three', 'hearts', 3));
pushToArray(deckOfCards, new CreateDeck(11, '2♥︎', 'two', 'hearts', 2));
pushToArray(deckOfCards, new CreateDeck(12, 'A♥︎', 'ace', 'hearts', 1));

pushToArray(deckOfCards, new CreateDeck(13, 'K♦︎', 'king', 'diamonds', 13));
pushToArray(deckOfCards, new CreateDeck(14, 'Q♦︎', 'queen', 'diamonds', 12));
pushToArray(deckOfCards, new CreateDeck(15, 'J♦︎', 'jack', 'diamonds', 11));
pushToArray(deckOfCards, new CreateDeck(16, '10♦︎', 'ten', 'diamonds', 10));
pushToArray(deckOfCards, new CreateDeck(17, '9♦︎', 'nine', 'diamonds', 9));
pushToArray(deckOfCards, new CreateDeck(18, '8♦︎', 'eight', 'diamonds', 8));
pushToArray(deckOfCards, new CreateDeck(19, '7♦︎', 'seven', 'diamonds', 7));
pushToArray(deckOfCards, new CreateDeck(20, '6♦︎', 'six', 'diamonds', 6));
pushToArray(deckOfCards, new CreateDeck(21, '5♦︎', 'five', 'diamonds', 5));
pushToArray(deckOfCards, new CreateDeck(22, '4♦︎', 'four', 'diamonds', 4));
pushToArray(deckOfCards, new CreateDeck(23, '3♦︎', 'three', 'diamonds', 3));
pushToArray(deckOfCards, new CreateDeck(24, '2♦︎', 'two', 'diamonds', 2));
pushToArray(deckOfCards, new CreateDeck(25, 'A♦︎', 'ace', 'diamonds', 1));

pushToArray(deckOfCards, new CreateDeck(26, 'K♠︎', 'king', 'spades', 13));
pushToArray(deckOfCards, new CreateDeck(27, 'Q♠︎', 'queen', 'spades', 12));
pushToArray(deckOfCards, new CreateDeck(28, 'J♠︎', 'jack', 'spades', 11));
pushToArray(deckOfCards, new CreateDeck(29, '10♠︎', 'ten', 'spades', 10));
pushToArray(deckOfCards, new CreateDeck(30, '9♠︎', 'nine', 'spades', 9));
pushToArray(deckOfCards, new CreateDeck(31, '8♠︎', 'eight', 'spades', 8));
pushToArray(deckOfCards, new CreateDeck(32, '7♠︎', 'seven', 'spades', 7));
pushToArray(deckOfCards, new CreateDeck(33, '6♠︎', 'six', 'spades', 6));
pushToArray(deckOfCards, new CreateDeck(34, '5♠︎', 'five', 'spades', 5));
pushToArray(deckOfCards, new CreateDeck(35, '4♠︎', 'four', 'spades', 4));
pushToArray(deckOfCards, new CreateDeck(36, '3♠︎', 'three', 'spades', 3));
pushToArray(deckOfCards, new CreateDeck(37, '2♠︎', 'two', 'spades', 2));
pushToArray(deckOfCards, new CreateDeck(38, 'A♠︎', 'ace', 'spades', 1));

pushToArray(deckOfCards, new CreateDeck(39, 'K♣︎', 'king', 'clubs', 13));
pushToArray(deckOfCards, new CreateDeck(40, 'Q♣︎', 'queen', 'clubs', 12));
pushToArray(deckOfCards, new CreateDeck(41, 'J♣︎', 'jack', 'clubs', 11));
pushToArray(deckOfCards, new CreateDeck(42, '10♣︎', 'ten', 'clubs', 10));
pushToArray(deckOfCards, new CreateDeck(43, '9♣︎', 'nine', 'clubs', 9));
pushToArray(deckOfCards, new CreateDeck(44, '8♣︎', 'eight', 'clubs', 8));
pushToArray(deckOfCards, new CreateDeck(45, '7♣︎', 'seven', 'clubs', 7));
pushToArray(deckOfCards, new CreateDeck(46, '6♣︎', 'six', 'clubs', 6));
pushToArray(deckOfCards, new CreateDeck(47, '5♣︎', 'five', 'clubs', 5));
pushToArray(deckOfCards, new CreateDeck(48, '4♣︎', 'four', 'clubs', 4));
pushToArray(deckOfCards, new CreateDeck(49, '3♣︎', 'three', 'clubs', 3));
pushToArray(deckOfCards, new CreateDeck(50, '2♣︎', 'two', 'clubs', 2));
pushToArray(deckOfCards, new CreateDeck(51, 'A♣︎', 'ace', 'clubs', 1));

const shuffleCards = () => {
  deckOfCards = deckOfCards.sort(() => .5 - Math.random());
};

shuffleCards();
console.log('The shuffled deck is', deckOfCards);


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

const banks = [];

const heartsBank = { icon: '♥︎', suit: 'hearts', 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false };
const diamondsBank = { icon: '♦︎', suit: 'diamonds', 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false };
const spadesBank = { icon: '♠︎', suit: 'spades', 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false };
const clubsBank = { icon: '♣︎', suit: 'clubs', 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false };

pushToArray(banks, heartsBank);
pushToArray(banks, diamondsBank);
pushToArray(banks, spadesBank);
pushToArray(banks, clubsBank);

const flipCard = card => {
  if(!card.showFront) {
    card.showFront = true;
    card.removeClass('back');
    card.addClass('front');
  } else {
    card.showFront = false;
    card.removeClass('front');
    card.addClass('back');
  }
  // assignColor(card);
};

// const assignColor = card => {
//   if(card.suit === 'hearts' || card.suit === 'diamonds') {
//     card.addClass('red');
//   } else {
//     card.addClass('black');
//   }
// };

const appendElement = (parent, el) => {
  parent.append(el);
};

let remainingCardsFront = [];
let remainingCardsBack = [];

function bankCard() {
  console.log('Clicked on', $(this));
  const $dblClicked = $(this);
  const suit = $dblClicked.attr('suit');
  console.log('Suit is', suit);
  $dblClicked.appendTo($(`#${suit}`));
  console.log('This should go to', $(`#${suit}`));
  $dblClicked.css({ top: 0, left: '' });

  remainingCardsFront = remainingCardsFront.filter(card => {
    card !== $dblClicked;
  });
}

$(() => {
  const $columnsContainer = $('.columns-container');
  const $remainingCardsBack = $('.remaining-cards-back');
  const $remainingCardsFront = $('.remaining-cards-front');
  const $foundCards = $('.found-cards');
  let $card;

  // $columnsContainer.append($('<div>Wew</div>'));

  columns.forEach(column => {
    // const $newColumn = `<div>${column.id}</div>`;
    const $column = $(`<div class=${column.name} style="left: ${column.xPosition}%">${column.id}</div>`);
    appendElement($columnsContainer, $column);

    for (let cardIndex = 0; cardIndex < column.initialNumber; cardIndex++) {
      console.log(cardIndex);
      const $newCard = $(`<div class="card back ${deckOfCards[cardIndex].suit}" style="top: ${cardIndex * 200}%" value="${deckOfCards[cardIndex].value}" suit="${deckOfCards[cardIndex].suit}">${deckOfCards[cardIndex].name}</div>`);
      pushToArray(column.cards, $newCard);
      appendElement($column, $newCard);
      deckOfCards = deckOfCards.filter(card => card.name !== deckOfCards[cardIndex].name);

    }
    console.log('The column has', column.cards);

    flipCard(column.cards[column.cards.length - 1]);
    // flipCard(column.cards[1]);
    // flipCard(column.cards[column.cards.length - 4]);
    console.log('This cards suit is', column.cards[column.cards.length - 1]);
  });

  console.log('Deck of cards now contains', deckOfCards);

  deckOfCards.forEach(card => {
    const $newCard = $(`<div class="card back ${card.suit}" value="${card.value}" suit="${card.suit}">${card.name}</div>`);
    appendElement($remainingCardsBack, $newCard);
    pushToArray(remainingCardsBack, $newCard);
  });

  $remainingCardsBack.click(function() {
    console.log('The remaining cards are', remainingCardsBack);

    for (let i = 0; i < 3; i ++) {
      appendElement($remainingCardsFront, remainingCardsBack[i]);
      flipCard(remainingCardsBack[i]);
      remainingCardsBack[i].css({ left: 15 + (i * 30) });
      remainingCardsBack[i].removeClass('back');
      remainingCardsBack[i].addClass('front');
      pushToArray(remainingCardsFront, remainingCardsBack[i]);
    }

    remainingCardsBack = remainingCardsBack.slice(3, remainingCardsBack.length);

    console.log('Now the remaining cards are', remainingCardsBack);

    if(remainingCardsBack.length <= 3) {
      $remainingCardsBack.empty();
    }

    if (remainingCardsBack.length === 0) {
      remainingCardsFront.forEach(card => {
        appendElement($remainingCardsBack, card);
        pushToArray(remainingCardsBack, card);
        flipCard(card);
        card.css({ left: 0 });
        card.removeClass('front');
        card.addClass('back');
      });
      remainingCardsFront = [];
      $remainingCardsFront.empty();
    }
    addDblClickEventListener();
  });


  banks.forEach(bank => {
    const $bank = $(`<div class="bank" id="${bank.suit}">${bank.icon}</div>`);
    $bank.appendTo($foundCards);
  });



  $card = $('.column .front, .cards-remaining-front:last-child');
  $card.on('dblclick', bankCard);

  const addDblClickEventListener = () => {
    remainingCardsFront.forEach(card => {
      card.dblclick(bankCard);
    });
  };
});
