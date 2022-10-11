const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
const liItem = [];
ingredients.forEach((item) => {
  const elemRef = document.createElement("li");
  elemRef.classList.add("item");
  elemRef.textContent = item;
  liItem.push(elemRef);
});

listRef.append(...liItem);
