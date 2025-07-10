// Step 1.
function numberFacts(num) {
  fetch(`http://numbersapi.com/${num}?json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.text);
    })
    .catch((error) => {
      console.error("Error fetching number fact:", error);
    });
}

// Step 2.
function numberFactsArray(nums) {
  const promises = nums.map((num) => {
    return fetch(`http://numbersapi.com/${num}?json`)
      .then((response) => response.json())
      .then((data) => data.text);
  });

  Promise.all(promises)
    .then((facts) => {
      facts.forEach((fact) => console.log(fact));
    })
    .catch((error) => {
      console.error("Error fetching number facts:", error);
    });
}

// Step 3.
// displays 4 random facts about your fav number
const favNumber = 12;
function displayResults() {
  const button = document.getElementById("get-facts");
  button.addEventListener("click", () => {
    const promises = Array.from({ length: 4 }, () => {
      return fetch(`http://numbersapi.com/${favNumber}?json`)
        .then((response) => response.json())
        .then((data) => data.text);
    });

    Promise.all(promises)
      .then((facts) => {
        facts.forEach((fact) => {
          const p = document.createElement("p");
          p.textContent = fact;
          document.body.appendChild(p);
        });
      })
      .catch((error) => {
        console.error("Error fetching random number facts:", error);
      });
  });
}
displayResults();
