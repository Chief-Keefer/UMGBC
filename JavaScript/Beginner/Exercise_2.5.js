const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1
guests.unshift("BRUTUS");

/* Question 1.
We can verify that BRUTUS was added to the beginning of the array by checking the first index in the array, guests[0].
*/

// Step 2
guests.push("AUGUSTUS");
guests.push("LUCIA");

// Step 3
const spartacusIndex = guests.indexOf("SPARTACUS");

/* Question 2.
If SPARTACUS is not in the array, indexOf will return -1.
*/

// Step 4
const cassiusIndex = guests.indexOf("CASSIUS");
guests.splice(cassiusIndex, 1);

// Step 5
const vipGuests = guests.slice(0, 3);

// Step 6
const specialGuest = guests.slice(0, 1); 
const generalGuests = guests.slice(1);
generalGuests.sort();
const sortedGuests = specialGuest.concat(generalGuests);