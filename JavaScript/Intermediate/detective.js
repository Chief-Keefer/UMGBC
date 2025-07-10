function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

let vacationDays = 0;
const successfulVacationDays = 13;
const failedVacationDays = 1;

for (let i = 0; i < 20 /* number of missions we've been on*/; i++) {
  try {
    mysteryOperation();
    vacationDays += successfulVacationDays;
  } catch (error) {
    console.error(error.message);
    vacationDays += failedVacationDays;
  } finally {
    vacationDays += 3; // Adding consolation vacation days for each iteration
  }
}

console.log("Total vacation days earned: " + vacationDays);
