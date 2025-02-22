<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'emails.txt';
        $email .= "\n"; // Add a newline character

        if (file_put_contents($file, $email, FILE_APPEND | LOCK_EX)) {
            // Success! You can redirect or display a success message.
            echo "<script>alert('Thank you for subscribing!'); window.location.href = window.location.href;</script>"; // Basic success message, redirects to same page.
            exit; // Important to stop further execution
        } else {
            // Handle file write error
            echo "<script>alert('An error occurred. Please try again.'); window.location.href = window.location.href;</script>";
            exit;
        }
    } else {
        // Invalid email
        echo "<script>alert('Please enter a valid email address.'); window.location.href = window.location.href;</script>";
        exit;
    }
}
?>