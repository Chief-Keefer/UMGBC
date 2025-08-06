/*function drawCard() {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => {
      const card = data.cards[0];
      console.log(`You drew a ${card.value} of ${card.suit}`);
    });
}*/

/*function draw2Cards() {
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
}*/

document.addEventListener("DOMContentLoaded", () => {
  async function setupDeck() {
    try {
      const button = document.querySelector("button");
      const playArea = document.querySelector("#card-container");
      const counter = document.querySelector("#counter");
      const deck = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      ).then((response) => response.json());
      const deckId = deck.deck_id;
      const count = deck.remaining;

      button.addEventListener("click", async () => {
        try {
          const cardResponse = await fetch(
            `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
          ).then((response) => response.json());
          const card = cardResponse.cards[0];
          const cardImg = document.createElement("img");
          cardImg.src = card.image;
          cardImg.alt = `${card.value} of ${card.suit}`;
          playArea.appendChild(cardImg);
          counter.textContent = `Cards remaining: ${cardResponse.remaining}`;

          if (cardResponse.remaining === 0) {
            button.disabled = true;
            button.textContent = "No more cards to draw";
          }
        } catch (error) {
          console.error("Error drawing card:", error);
        }
      });
    } catch (error) {
      console.error("Error setting up the deck:", error);
    }
  }

  setupDeck();
});
