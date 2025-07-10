function drawCard() {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => {
      const card = data.cards[0];
      console.log(`You drew a ${card.value} of ${card.suit}`);
    });
}

function draw2Cards() {
  const card1 = fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => {
      return data.cards[0];
    });
  const card2 = fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => {
      return data.cards[0];
    });

  [card1, card2].forEach((card) => {
    card.then((c) => {
      console.log(`You drew a ${c.value} of ${c.suit}`);
    });
  });
}

function setupDeck() {}
draw2Cards();
