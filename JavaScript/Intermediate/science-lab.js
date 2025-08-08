/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let name = "Peter";
let age = 21;
let studyField = "Quantum Physics";
const participant = { name, age, studyField };
console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantWithMethod = {
  ...participant,
  displayInfo() {
    console.log(
      `Participant Info: Name - ${this.name}, Age - ${this.age}, Study Field - ${this.studyField}`
    );
  },
};
participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantWithArrowMethod = {
  ...participant,
  displayInfo: () => {
    // In arrow functions, `this` does not refer to the object itself.
    console.log(
      `Participant Info: Name - ${this.name}, Age - ${this.age}, Study Field - ${this.studyField}`
    );
  },
};
participantWithArrowMethod.displayInfo(); // This will likely print undefined values for name, age, and studyField.

/*
 * Observations:
 * TODO: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical scope.
 * In this case, `this` does not refer to the `participantWithArrowMethod` object, leading to undefined values when trying to access its properties.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propName, value) {
  return { ...obj, [propName]: value };
}
