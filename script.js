const product = document.querySelectorAll('.ul li');
const img = document.querySelectorAll('.items img');

let dataFilter = document.createElement("ul");

const filterMenuitems = filterMenu.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = items;
    return listItem;

});

filterMenuitems.forEach((items) => {
    stuffList.append(items);
    
});