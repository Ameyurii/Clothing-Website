const orderItemsTable = document.getElementById("order_items");
const orderTotalPrice = document.getElementById("order_total");

// initialize total price
let totalPrice = 0;

//get cart items from local storage
const cartItems = Object.keys(localStorage);

for (const cartItem of cartItems) {
    const value = JSON.parse(localStorage.getItem(cartItem));

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    tdItem.textContent = value['name'];
    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = value['amount'];
    const tdTotalPrice = document.createElement('td');
    const itemTotalPrice = value['price'].slice(0, -1) * value['amount'];
    tdTotalPrice.textContent = `$${itemTotalPrice.toFixed(2)}`;

    totalPrice+=itemTotalPrice;

    tr.appendChild(tdItem);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdTotalPrice);
    orderItemsTable.appendChild(tr);


}

// Display the total price
orderTotalPrice.textContent = "Total Price: " + totalPrice.toFixed(2) + "£";

const placeOrderBtn = document.getElementById("placeOrder")
placeOrderBtn.addEventListener('click', function () {
    // Order placed alert
    alert('Order placed successfully! Thank you for shopping with us.');

    // Clear the cart and (remove items from local storage)
    for (const cartItem of cartItems) {
        localStorage.removeItem(cartItem);
    }
});


// Handle Place Order button click

