const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});
function validateForm() {
    var email = document.getElementById("emailInput").value;
    var emailError = document.getElementById("emailError");

    // Check if email field is empty or not valid
    if (email === "" || !isValidEmail(email)) {
        emailError.style.display = "block"; // Show error message
        return false; // Prevent form submission
    } else {
        emailError.style.display = "none"; // Hide error message
        return true; // Allow form submission
    }
}

// Function to validate email format
function isValidEmail(email) {
    // Simple regex pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function updatePrice(itemId) {
    // Get the quantity input field and the price element
    var quantityInput = document.getElementById("quantity" + itemId);
    var priceElement = document.getElementById("price" + itemId);
    var subtotalElement = document.getElementById("subtotal");

    // Get the current price
    var currentPrice = 50; // Assuming initial price is $50

    // Get the new quantity
    var newQuantity = parseInt(quantityInput.value);

    // Calculate the new total price
    var newTotalPrice = currentPrice * newQuantity;

    // Update the price element with the new total price
    priceElement.innerText = "Price: $" + newTotalPrice.toFixed(2);

    // Update the subtotal element with the new total price
    subtotalElement.innerText = "Subtotal: $" + newTotalPrice.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has already accepted or declined
    if (localStorage.getItem('popupAccepted') !== 'true' && localStorage.getItem('popupDeclined') !== 'true') {
        showPopup('experimental-popup');
    }

    // Show popup function with animation
    function showPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = 'block';
        popup.classList.add('pop-in');
    }

    // Hide popup function
    function hidePopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = 'none';
    }

    // Accept button
    document.getElementById('acceptBtn').addEventListener('click', function () {
        localStorage.setItem('popupAccepted', 'true');
        hidePopup('experimental-popup');
    });

    // Decline button
    document.getElementById('declineBtn').addEventListener('click', function () {
        localStorage.setItem('popupDeclined', 'true');
        hidePopup('experimental-popup');
        // Here you can implement banning IP address
        // For demonstration purposes, let's just redirect to 'bye.html'
        window.location.href = 'bye.html';
    });

    // Yes button (Are you sure?)
    document.getElementById('yesBtn').addEventListener('click', function () {
        hidePopup('are-you-sure-popup');
        // Implement any action needed on 'Yes' click
    });

    // No button (Are you sure?)
    document.getElementById('noBtn').addEventListener('click', function () {
        showPopup('experimental-popup');
    });
});
