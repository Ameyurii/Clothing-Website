const itemDetails = document.getElementById('item-details');
const objectName = itemDetails.querySelector('h5');
const img = itemDetails.querySelector('img');
const price = itemDetails.querySelector('h4');
// const color = itemDetails.querySelector('.color');
const description = itemDetails.querySelector('.description');

const img_text = sessionStorage.getItem('img');
const name_text = sessionStorage.getItem('name');
const price_text = sessionStorage.getItem('price');
// const color_text = sessionStorage.getItem('color');
const description_text = sessionStorage.getItem('description');
sessionStorage.clear();

objectName.textContent = name_text;
price.textContent = price_text;
// color.textContent = color_text
description.textContent = description_text;
img.setAttribute('src', img_text);



const button = document.querySelector("button");
button.addEventListener('click', () => {
    alert("Item was successfully added to the cart!");
    const amount = document.getElementById('amount').value;

    const cartObject = {
        img: img_text,
        name: name_text,
        price: price_text,
        amount: amount
    }

    localStorage.setItem(name_text, JSON.stringify(cartObject));
})


// const input = document.getElementById('amount');
// input.addEventListener('change', e => {
//     if( e.target.value < 1 ) {
//         e.target.value = 1;
//     }
// })