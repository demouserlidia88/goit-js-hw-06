const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById("ingredients");
const liElements = ingredients.map((ingredientName) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredientName;
  liElement.classList.add("item");

  return liElement;
});

ingredientsList.append(...liElements);
