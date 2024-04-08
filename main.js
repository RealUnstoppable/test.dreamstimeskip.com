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

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var acceptButton = document.getElementById("accept");
    var declineButton = document.getElementById("decline");

    var popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        popup.style.display = "block";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("popupShown", true);
        popup.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
        window.location.href = "banned.html";
        //implement server-side logic to ban IP addresses.
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup-kari");
    var acceptButton = document.getElementById("accept");
    var declineButton = document.getElementById("decline");

    var popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        popup.style.display = "show";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("popupShown", true);
        popup.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
        window.location.href = "index.html";
        //implement server-side logic to ban IP addresses.
    });
});

<script>
    function login(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var email = document.getElementById('login-email').value;
        var password = document.getElementById('login-password').value;

        // Send data to backend (example using Fetch API)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
            if (response.ok) {
                // Handle successful login
            } else {
                // Handle login failure
            }
        })
        .catch(error => console.error('Error:', error));
    }
</script>
