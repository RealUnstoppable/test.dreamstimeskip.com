<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the email from the form
    $email = $_POST['email'];

    // You can then process the email as needed, such as storing it in a database or sending it via email
    // For example, you can store it in a text file:
    $file = 'emails.txt';
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank-you.html");
    exit;
}
?>
