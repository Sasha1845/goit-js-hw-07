const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
