'use strict';



const categories = document.querySelectorAll(".item")
const categoriesQuantity = categories.length
console.log(`Number of categories: ${categoriesQuantity}`);

categories.forEach(category => {
const title  = category.querySelector("h2").textContent;
console.log(`Category: ${title}`);
const nesting = category.querySelectorAll("li").length;
console.log(`Elements: ${nesting}`);
})



