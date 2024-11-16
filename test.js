// Initialize cart
let cart = 0;

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cart++;
    updateCartCount();
  });
});

// Update cart count in the navbar
function updateCartCount() {
  document.querySelector('.cart a').textContent = `Cart (${cart})`;
}
