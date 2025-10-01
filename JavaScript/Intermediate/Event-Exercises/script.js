document.addEventListener("DOMContentLoaded", function () {
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");
  const newBoxButton = document.getElementById("new-box-button");
  const boxContainer = document.getElementById("box-container");
  let boxColor = null;
  let boxID = 0;

  function createBox() {
    const box = document.createElement("div");
    ++boxID;
    box.setAttribute("box-id", boxID.toString());
    box.className = "box";
    box.style.backgroundColor = boxColor;
    box.textContent = `Box ${boxID}`;

    return box;
  }

  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newColor = colorInput.value.trim();

    const boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
      box.style.backgroundColor = newColor;
    }

    colorInput.value = "";
    boxColor = newColor;
  });

  newBoxButton.addEventListener("click", function () {
    const box = createBox();
    boxContainer.appendChild(box);
  });

  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.remove();
    }
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("box")) {
      const id = e.target.getAttribute("box-id");
      e.target.textContent = `Box ${id}`;
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.target.id === "color-input") return;

    if (e.key === "n" || e.key === "N") {
      const box = createBox();
      boxContainer.appendChild(box);
    }
  });
});
