<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "jewelbalajadia8@gmail.com";

    $subject = "New Contact Form Submission";

    $content = "Name: $name\n";
    $content .= "Phone Number: $phone\n";
    $content .= "Message: $message\n";

    $headers = "From: $name <$to>";

    if (mail($to, $subject, $content, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Oops! An error occurred while sending your message.";
    }
}
?>
