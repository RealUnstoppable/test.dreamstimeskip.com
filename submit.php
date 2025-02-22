<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the email from the form
    $email = $_POST['email'];

    // Basic email validation (you might want to add more robust validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid email (e.g., display an error message)
        echo "Invalid email format.";
        exit; // Stop further execution
    }

    // Sanitize the email (important for security)
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    // File path
    $file = 'emails.txt';

    // Attempt to write to the file
    $result = file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

    if ($result === false) {
        // Handle file write error (e.g., log the error)
        echo "Error saving email.";
        exit; // Stop further execution
    }

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank-you.html");
    exit;
}
?>