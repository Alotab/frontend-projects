const listItems = document.querySelectorAll('.ids');
let counter = 1;

for (const item of listItems) {
    
    var tryss = item.id = `${counter}`;
    item.innerHTML = tryss
    console.log(tryss);
    counter++;
}