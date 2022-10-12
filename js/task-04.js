const btnDecriment = document.querySelector(`button[data-action="decrement"]`);
const btnIncriment = document.querySelector(`button[data-action="increment"]`);
const valueRef = document.querySelector("#value");
let counterValue = Number(valueRef.textContent);
const btnDRef = Number(btnDecriment.textContent);
const btnIRef = Number(btnIncriment.textContent);

const decrimentFn = () => {
  counterValue += btnDRef;
  valueRef.textContent = String(counterValue);
};
const incrimentFn = () => {
  counterValue += btnIRef;
  valueRef.textContent = String(counterValue);
};

btnDecriment.addEventListener("click", decrimentFn);
btnIncriment.addEventListener("click", incrimentFn);
