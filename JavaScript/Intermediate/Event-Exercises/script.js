document.addEventListener("DOMContentLoaded", function () {
  const colorInput = document.getElementById("colorInput");
  const newColorButton = document.querySelector("button");
  const newBoxButton = document.getElementById("new-box-button");
  const boxes = document.querySelectorAll(".box");
  newColorButton.addEventListener("click", function (e) {
    e.preventDefault();
    const color = colorInput.value;
    boxes.forEach((box) => {
      box.style.backgroundColor = color;
    });
  });

  newBoxButton.addEventListener("click", function () {
    // Code to create a new box will go here
  });
});
