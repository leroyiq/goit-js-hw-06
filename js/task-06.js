const inputRef = document.querySelector("#validation-input");

const inputFocusOff = (event) => {
  const strRef = event.currentTarget.value;
  if (strRef.length !== 0) {
    if (strRef.length <= inputRef.dataset.length) {
      inputRef.classList.remove("invalid");
      inputRef.classList.add("valid");
    } else {
      inputRef.classList.replace("valid", "invalid");
    }
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", inputFocusOff);
