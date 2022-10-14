const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const spanPasteFn = (event) => {
  if (event.currentTarget.value !== "") {
    spanRef.textContent = event.currentTarget.value;
  } else {
    spanRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", spanPasteFn);
