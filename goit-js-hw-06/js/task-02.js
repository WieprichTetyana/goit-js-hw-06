const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const galleryListEl = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();


ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
});

gallleryList.appendChild(fragment);