// sessionStorage.clear();

const cards = document.querySelectorAll('.pro');
cards.forEach(card => {
    const name = card.querySelector('h5').textContent;
    const img = card.querySelector('img').getAttribute('src');
    const price = card.querySelector('h4').textContent;
    const description = card.querySelector('.description').textContent;

    let cartBtnPressed = false;
    const cartBtn = card.querySelector('.cart');
    cartBtn.addEventListener('click', () => {
        alert("Item was successfully added to the cart!");
        cartBtnPressed = true;

        const cartObject = {
            img: img,
            name: name,
            price: price,
            amount: 1
        }

        localStorage.setItem(name, JSON.stringify(cartObject));
    })

    card.addEventListener('click', () => {
        if (!cartBtnPressed) {
            sessionStorage.setItem('img', img);
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('price', price);
            sessionStorage.setItem('description', description);      
            window.location.href = 'item.html';
        }
    })

    cartBtnPressed = false;
});


const hoodie_btn = document.getElementById('hoodie_btn');
const jumper_btn = document.getElementById('jumper_btn');
const tShirt_btn = document.getElementById('tShirt_btn');

const hoodies = document.querySelectorAll('.hoodies')
const jumpers = document.querySelectorAll('.jumpers')
const tshirt = document.querySelectorAll('.tshirt')

hoodie_btn.addEventListener('click', () => {
    hoodie_btn.classList.add('btn_active')
    jumper_btn.classList.remove('btn_active')
    tShirt_btn.classList.remove('btn_active')

    cards.forEach( item => {
        item.classList.add('hidden')
    })
    hoodies.forEach( item => {
        item.classList.remove('hidden')
    })
})
jumper_btn.addEventListener('click', () => {
    jumper_btn.classList.add('btn_active')
    hoodie_btn.classList.remove('btn_active')
    tShirt_btn.classList.remove('btn_active')
    
    cards.forEach( item => {
        item.classList.add('hidden')
    })
    jumpers.forEach( item => {
        item.classList.remove('hidden')
    })
})
tShirt_btn.addEventListener('click', () => {
    tShirt_btn.classList.add('btn_active')
    hoodie_btn.classList.remove('btn_active')
    jumper_btn.classList.remove('btn_active')
    
    cards.forEach( item => {
        item.classList.add('hidden')
    })
    tshirt.forEach( item => {
        item.classList.remove('hidden')
    })
})