// IDEA: make the game cheat-proof so the user can't just go into dev tools and see where the unflipped cards are
let numberOfDeckFlipCompletions = 0;

let deckOfCards = [];
const columns = [];
const banks = [];
let remainingCardsFront = [];
let remainingCardsBack = [];

// Create cards in deck
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


// Create seven columns for cards to go in
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


// Create banks for cards to go in when banked
const hearts = { icon: '♥︎', suit: 'hearts', banked: [true, false, false, false, false, false, false, false, false, false, false, false, false, false]};
const diamonds = { icon: '♦︎', suit: 'diamonds', banked: [true, false, false, false, false, false, false, false, false, false, false, false, false, false] };
const spades = { icon: '♠︎', suit: 'spades', banked: [true, false, false, false, false, false, false, false, false, false, false, false, false, false] };
const clubs = { icon: '♣︎', suit: 'clubs', banked: [true, false, false, false, false, false, false, false, false, false, false, false, false, false] };

pushToArray(banks, hearts);
pushToArray(banks, diamonds);
pushToArray(banks, spades);
pushToArray(banks, clubs);


// Randomly shuffle cards
const shuffleCards = () => {
  deckOfCards = deckOfCards.sort(() => .5 - Math.random());
};

shuffleCards();
console.log('The shuffled deck is', deckOfCards);

// Flip card to back or front
const flipCard = card => {
  if(!card.showFront) {
    flipCardToShowFront(card);
  } else {
    flipCardToShowBack(card);
  }
};

// Flip card to show front
const flipCardToShowFront = card => {
  if(!card.showFront) {
    card.showFront = true;
    card.removeClass('back');
    card.addClass('front');
  }
};

// Flip card to show bank
const flipCardToShowBack = card => {
  if(card.showFront) {
    card.showFront = false;
    card.removeClass('front');
    card.addClass('back');
  }
};

const appendElement = (parent, el) => {
  parent.append(el);
};

// Bank card into its respective bank
function bankCard() {
  const $dblClicked = $(this);
  const suit = $dblClicked.attr('suit');
  const cardIndex = $dblClicked.attr('value');

  // Check card's suit
  if(suit === 'hearts') {
    // Check if card is valid
    if(hearts.banked[cardIndex] === false && hearts.banked[cardIndex - 1] === true) {
      // Update banked array
      hearts.banked[cardIndex] = true;
      // Move card
      $dblClicked.appendTo($(`#${suit}`));
      $dblClicked.css({ top: 0, left: '' });
      // Minus one from remainingCardsFront array
      remainingCardsFront.pop();
      // If there are still cards flipped from deck
      if(remainingCardsFront.length > 0) {
        // Reapply double click event listener to them
        addDblClickEventListener();
      }
    } else {
      console.log('Nope');
    }
  } else if(suit === 'diamonds') {
    if(diamonds.banked[cardIndex] === false && diamonds.banked[cardIndex - 1] === true) {
      diamonds.banked[cardIndex] = true;
      $dblClicked.appendTo($(`#${suit}`));
      $dblClicked.css({ top: 0, left: '' });
      remainingCardsFront.pop();
      if(remainingCardsFront.length > 0) {
        addDblClickEventListener();
      }
    } else {
      console.log('Nope');
    }
  } else if (suit === 'spades'){
    if(spades.banked[cardIndex] === false && spades.banked[cardIndex - 1] === true) {
      spades.banked[cardIndex] = true;
      $dblClicked.appendTo($(`#${suit}`));
      $dblClicked.css({ top: 0, left: '' });
      remainingCardsFront.pop();
      if(remainingCardsFront.length > 0) {
        addDblClickEventListener();
      }
    } else {
      console.log('Nope');
    }
  } else {
    if(clubs.banked[cardIndex] === false && clubs.banked[cardIndex - 1] === true) {
      clubs.banked[cardIndex] = true;
      $dblClicked.appendTo($(`#${suit}`));
      $dblClicked.css({ top: 0, left: '' });
      remainingCardsFront.pop();
      if(remainingCardsFront.length > 0) {
        addDblClickEventListener();
      }
    } else {
      console.log('Nope');
    }
  }
  // Flip any cards that should be showing their front but are not
  flipNextCardOnColumn();
}

// Find top flipped card from deck and apply double click event listener
const addDblClickEventListener = () => {
  remainingCardsFront[remainingCardsFront.length-1].on('dblclick', bankCard);
};

const flipNextCardOnColumn = () => {
  // Find top card on columns
  const $lastCard = $('.columns-container .column .card:last-child');
  setTimeout(() => {
    // Flip card
    flipCardToShowFront($lastCard);
    // Apply event listener
    addDblClickEventListenerToColumnCards();
  }, 300);
};

const addDblClickEventListenerToColumnCards = () => {
  // Apply double click event listener to top column card
  const $frontCard = $('.column .front');
  $frontCard.on('dblclick', bankCard);
};

const toggleCursor = (el, cursor) => {
  el.css({ cursor: cursor });
}

//BUG: cannot go round deck again for a third time
$(() => {

  const $columnsContainer = $('.columns-container');
  const $foundCards = $('.found-cards');
  const $remainingCardsBack = $('.remaining-cards-back');
  const $remainingCardsFront = $('.remaining-cards-front');

  let draggableCards = [];

  const flipCardsOnDeck = i => {
    // move card to remainingCardsBack div
    appendElement($remainingCardsFront, remainingCardsBack[i]);
    // Flip card
    flipCard(remainingCardsBack[i]);
    remainingCardsBack[i].css({ left: 15 + (i * 30) });
    remainingCardsBack[i].removeClass('back');
    remainingCardsBack[i].addClass('front');
    // Push card to remainingCardsBack array
    pushToArray(remainingCardsFront, remainingCardsBack[i]);
  };

  columns.forEach(column => {
    // For each column in the array, create a DOM element
    const $column = $(`<div class=${column.name} style="left: ${column.xPosition}%">${column.id}</div>`);
    appendElement($columnsContainer, $column);

    // Add the necessary number of cards
    for (let cardIndex = 0; cardIndex < column.initialNumber; cardIndex++) {
      console.log(cardIndex);
      const $newCard = $(`<div class="card back ${deckOfCards[cardIndex].suit}" style="top: ${cardIndex * 200}%" value="${deckOfCards[cardIndex].value}" suit="${deckOfCards[cardIndex].suit}">${deckOfCards[cardIndex].name}</div>`);
      pushToArray(column.cards, $newCard);
      appendElement($column, $newCard);
      // Remove card from deck
      deckOfCards = deckOfCards.filter(card => card.name !== deckOfCards[cardIndex].name);

    }
    console.log('The column has', column.cards);

    // Flip first card in column
    flipCard(column.cards[column.cards.length - 1]);
    console.log('This cards suit is', column.cards[column.cards.length - 1]);
  });

  console.log('Deck of cards now contains', deckOfCards);

  // For each card left in the deck...
  deckOfCards.forEach(card => {
    // ... create a DOM element card in the deck
    const $newCard = $(`<div class="card back ${card.suit}" value="${card.value}" suit="${card.suit}">${card.name}</div>`);
    appendElement($remainingCardsBack, $newCard);
    pushToArray(remainingCardsBack, $newCard);
  });

  // On clicking the deck
  $remainingCardsBack.on('click', function() {
    // If there are three or more cards in there
    if (remainingCardsBack.length >= 3) {
      // Flip three cards
      for (let i = 0; i < 3; i ++) {
        flipCardsOnDeck(i);
      }
      console.log('Remaining are', remainingCardsBack);
      // Otherwise...
    } else {
      // ...flip remaining cards
      for (let i = 0; i < remainingCardsBack.length; i ++) {
        flipCardsOnDeck(i);
      }
      console.log('Remaining are', remainingCardsBack);

    }

    // If there are four or more cards in array
    if (remainingCardsBack.length >= 4) {
      console.log('Keep going', remainingCardsBack.length);
      // Remove these three cards from array
      remainingCardsBack = remainingCardsBack.slice(3, remainingCardsBack.length);
      // If there are three
    } else if (remainingCardsBack.length === 3) {
      console.log('The new one', remainingCardsBack.length);
      // Remove one card
      remainingCardsBack = remainingCardsBack.slice(0, 1);
      // If there are 0 - 2 cards
    } else if (remainingCardsBack.length < 3 && remainingCardsBack.length > 0) {
      console.log('Now the array should be emptied', remainingCardsBack.length);
      // Remove all of them from array
      remainingCardsBack = [];
      console.log('This is the emptied array', remainingCardsBack.length);
      console.log('And in the array, we have', remainingCardsBack);
    }


    if (remainingCardsBack.length === 0) {
      numberOfDeckFlipCompletions++;
      console.log('This is increasing', numberOfDeckFlipCompletions);

      // If user has gone through deck three times
      if (numberOfDeckFlipCompletions === 3) {
        // Invalidate it so it cannot be clicked on again
        $remainingCardsBack.html('☓');
        $remainingCardsBack.off('click');
        // Otherwise...
      } else {
        // ...reset it
        remainingCardsFront.forEach(card => {
          // Move cards back to deck
          appendElement($remainingCardsBack, card);
          pushToArray(remainingCardsBack, card);
          // Reflip cards
          flipCard(card);
          card.css({ left: 0 });
          card.removeClass('front');
          card.addClass('back');
          // Empty this div
          $remainingCardsFront.empty();
          console.log('finished');
        });
        remainingCardsFront = [];
      }
    }
    if(remainingCardsBack.length > 0) {
      // Reapply event listener
      addDblClickEventListener();
    }
  });


  // Create banks on DOM
  banks.forEach(bank => {
    const $bank = $(`<div class="bank" id="${bank.suit}">${bank.icon}</div>`);
    $bank.appendTo($foundCards);
  });

  addDblClickEventListenerToColumnCards();

  ///////////////// Click and drag /////////////////////
  const $card = $('.front');

  const moveCard = (coords, card) => {
    // Update card's offset
    const cardOffset = card.offset({ top: coords[1] - 45, left: coords[0] - 45 });
    console.log('Card is at', cardOffset);
  }

  const getCursorCoords = (card) => {
    // On mouse move
    $(document).bind('mousemove', function(e) {
      // Get co-ordinates
      const cursorCoords = [e.pageX, e.pageY]
      // Move card
      moveCard(cursorCoords, card)
    })
  }

  const turnOffMousemove = () => {
    // Turn off mousemove event
    $(document).unbind('mousemove');
  }

  $card.mouseover(function() {
    // Change cursor on hover
    toggleCursor($(this), 'pointer');
  })


  const dragCard = () => {
    // When card is clicked
    $card.mousedown(function(e) {
      // Store cards that can be moved
      pushToArray(draggableCards, $(this));
      console.log('Draggable cards is', draggableCards);
      // Get co-ordinates
      getCursorCoords($(this));
      toggleCursor($(this), 'grabbing');
    })
  }

  const releaseCard = () => {
    $card.mouseup(function() {
      // No cards can be moved now, so empty ths array
      draggableCards = [];
      console.log('Draggable cards is', draggableCards);
      turnOffMousemove();
      toggleCursor($(this), 'auto');
    })
  }

  // Apply both functions to cards
  const makeCardsDraggable = () => {
    dragCard();
    releaseCard();
  }

  makeCardsDraggable();

  // TODO: finish this code to move kings about
  // const $kings = $('[value=13]');
  // $kings.dblclick(function() {
  //   console.log($('.column').children.length);
  // });
});
