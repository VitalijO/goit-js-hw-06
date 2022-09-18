
const categories = document.querySelectorAll('ul#categories ul ');

console.log(`Number of categories: ${categories.length}`);
 
for (let i = 0; i < categories.length; i += 1) {
    const a = categories[i].previousElementSibling.textContent;
    const b = categories[i].querySelectorAll('li').length;
    console.log(`Category: ${a}`); 
    console.log(`Elements: ${b}`)   
}