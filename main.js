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
