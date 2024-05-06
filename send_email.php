<?php
// Recipient's email address
$to = "bindu.velivela0202@email.com";

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Subject of the email
$subject = "New Message from $name";

// Message body
$body = "From: $name ($email)\n\n$message";

// Headers for the email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>