const inputRef = document.querySelector("#validation-input");

const inputFocusOff = (event) => {
  const strRef = event.currentTarget.value;

  if (strRef.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", inputFocusOff);
