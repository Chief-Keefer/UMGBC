/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackSightings(...animals) {
  console.log("Animal Sightings in the Sanctuary:");
  animals.forEach((animal) => {
    console.log(`- ${animal}`);
  });
}

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Protected Habitats:", protectedHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const newRhinoStatus = {
  ...rhinoStatus,
  population: 750, // Updated population
  habitat: "Protected African Savannah", // New property added
};
console.log("Updated Rhino Status:", newRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfileCopy = { ...lionProfile, genetics: { diversity: "High" } };

/*
 * Observations:
 * TODO: Adding the `genetics` property to the copied object does not affect the original object.
 * This is because we are adding a new property to the copied object, and it does not exist in the original object.
 * However, if we were to modify a nested property within `genetics`, both objects would reflect that change since they would share the same reference for the nested object.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealthCopy = { ...ecosystemHealth };
ecosystemHealthCopy.foodSupply.herbivores = "Sufficient";
ecosystemHealthCopy.foodSupply.carnivores = "Scarce";
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Copied Ecosystem Health:", ecosystemHealthCopy);
/*
 * Observations:
 * TODO: Modifying the nested properties within `foodSupply` in the copied object also affects the original object.
 * This is because both the original and copied objects share the same reference for the nested `foodSupply` object.
 */
