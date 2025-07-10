const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

// Step 1
let location = "";
if (emblemClue1 === "Eagle") {
    location = "Forum";
} else if (emblemClue1 === "Lion") {
    location = "Colosseum";
} else {
    location = "Villa";
}

// Step 2
if (emblemClue2 === "Laurel" && location === "Forum") {
    location += " of Augustus";
} else if (emblemClue2 === "Grapes" || location === "Villa") {
    location += " of Pompey";
}

// Step 3
switch (emblemClue3) {
    case 7:
        location += " North";
        break;
    case 3:
        location += " South";
        break;
    case 9:
        location += " East";
        break;
    case 4:
        location += " West";
        break; 
}

/* Question.
It's important to use triple equals for comparison because it is strict equality, meaning it checks both value and type.
Double equals does not check for type. */