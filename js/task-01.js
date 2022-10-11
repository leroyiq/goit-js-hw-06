const categoryRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryRef.length}`);
console.log("");
categoryRef.forEach((item) => {
  const titleref = item.querySelector("h2");
  const elemRef = item.querySelector("ul");
  console.log(`Category: ${titleref.textContent}`);
  console.log(`Elements: ${elemRef.children.length}`);
  console.log("");
});
