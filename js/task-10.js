const inputRef = document.querySelector("input");
const creatBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const conteinerRef = document.querySelector("#boxes");

inputRef.addEventListener("input", getCurrentInputValue);
creatBtnRef.addEventListener("click", createBoxes);

function getCurrentInputValue(event) {
  return event.currentTarget.value;
}

function createBoxes(amount) {
  conteinerRef.innerHTML = "";
  const insert = [];
  amount = Number(inputRef.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;

    box.style.marginTop = "20px";

    insert.push(conteinerRef.appendChild(box));
  }
  conteinerRef.append(...insert);
}

destroyBtnRef.addEventListener("click", destroyAllBoxes);
function destroyAllBoxes() {
  conteinerRef.innerHTML = "";
  inputRef.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
