const cartItemsTable = document.getElementById('cart_items');
const totalPriceTable = document.getElementById('total_price');

let totalPrice = 0;
let row= 1;

const cartItems = Object.keys(localStorage);
for (const cartItem of cartItems) {
    const value = JSON.parse(localStorage.getItem(cartItem));
    // console.log(value)

    const tdNumber = document.createElement('td')
    tdNumber.textContent = row;

    const objImg = document.createElement('img')
    objImg.setAttribute('src', value['img'])
    const objP = document.createElement('p')
    objP.textContent = value['name'];
    const tdImg = document.createElement('td')
    tdImg.appendChild(objImg);
    tdImg.appendChild(objP);
    
    const tdAmount = document.createElement('td')
    tdAmount.textContent = value['amount'];
    const tdPrice = document.createElement('td')
    tdPrice.textContent = value['price'];

    totalPrice += value['price'].slice(0, -1)*value['amount'];
    const tdTotalPrice = document.createElement('td')
    tdTotalPrice.textContent = Math.round(value['price'].slice(0, -1)*value['amount']*100)/100 + "£";
    
    const btnDeleteSpan = document.createElement('span')
    btnDeleteSpan.textContent = 'X';
    btnDeleteSpan.classList.add('btn')
    btnDeleteSpan.classList.add('btn_warning')
    const btnDelete = document.createElement('td')
    btnDelete.appendChild(btnDeleteSpan);
    
    const tr = document.createElement('tr')
    tr.appendChild(tdNumber)
    tr.appendChild(tdImg)
    tr.appendChild(tdAmount)
    tr.appendChild(tdPrice)
    tr.appendChild(tdTotalPrice)
    tr.appendChild(btnDelete)

    cartItemsTable.appendChild(tr)
    row++
}
totalPriceTable.textContent = `Total Price: ${totalPrice.toFixed(2)}£`;

const btns = document.querySelectorAll('.btn_warning');
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Retrieve the key (item name) for the clicked button
        const cartItemKey = cartItems[index];

        // Remove the item from local storage
        localStorage.removeItem(cartItemKey);

        // Remove the corresponding row from the table
        btn.closest('tr').remove();

        row = 1;
        document.querySelectorAll('#cart_items td:first-child').forEach(td => {
            td.textContent = row++
        })

        // Recalculate the total price
        totalPrice -= parseFloat(btn.closest('tr').querySelector('td:nth-child(5)').textContent);

        // Update the total price display
        totalPriceTable.textContent = `Total Price: ${totalPrice.toFixed(2)}£`;

    })
});
