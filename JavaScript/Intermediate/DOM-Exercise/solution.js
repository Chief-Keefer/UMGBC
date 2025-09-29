const task1 = document.getElementById("task1");

task1.innerText = "Changed using 'innerText'.";

const task2 = document.getElementById("task2");
task2.innerHTML = "<button>Submit</button>";

document.body.style.backgroundColor = "#232323";

const task4Items = document.querySelectorAll(".item");
task4Items.forEach((item) => {
  item.style.border = "2px solid #000000";
});

const task5 = document.getElementById("task5");
task5.href = "https://www.springboard.com/";

const task6 = document.getElementById("task6");
task6.value = "DOM Master";

const task7 = document.getElementById("task7");
task7.classList.add("new-class");

const task8 = document.getElementById("task8");
const newButton = task8.appendChild(document.createElement("button"));
newButton.innerText = "Click Me";

document.getElementById("task9").remove();
