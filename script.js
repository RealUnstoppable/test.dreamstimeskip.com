const productList = document.querySelector('.product-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} x ${item.quantity} - $${item.price * item.quantity}
            <button class="remove-item" data-id="${item.id}">Remove</button>
            <button class="increase-quantity" data-id="${item.id}">+</button>
            <button class="decrease-quantity" data-id="${item.id}">-</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = [...productList.querySelectorAll('.product')].find(p => p.querySelector('.add-to-cart').dataset.id === productId);
    const name = product.querySelector('h2').textContent;
    const price = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, name, price, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
    }
}

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        addToCart(event.target.dataset.id);
    }
});

cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        removeFromCart(event.target.dataset.id);
    } else if (event.target.classList.contains('increase-quantity')) {
        increaseQuantity(event.target.dataset.id);
    } else if (event.target.classList.contains('decrease-quantity')) {
        decreaseQuantity(event.target.dataset.id);
    }
});

updateCart();
