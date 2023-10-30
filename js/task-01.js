const list = document.querySelector(`#categories`);
console.dir(`Number of categories: ${list.children.length}`);
const itemElem = list.querySelectorAll("li.item");

itemElem.forEach(category => {
  
  const categoryTitle = category.querySelector('h2');
  const itemElemCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${itemElemCount}`);
});







