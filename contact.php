<?php
// Include PHPMailer's autoloader
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this path matches your PHPMailer installation

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["p-number"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check if data is valid
    if (empty($name) || empty($phone) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'landbirdlaw.com';                       // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'your-email@gmail.com';                 // SMTP username (replace with your email)
        $mail->Password   = 'your-email-password';                  // SMTP password (replace with your password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
        $mail->Port       = 465;                                    // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name);                              // Set sender's email and name
        $mail->addAddress('landbirdlaw@gmail.com', 'Landbird Law'); // Add recipient

        // Content
        $mail->isHTML(true);                                        // Set email format to HTML
        $mail->Subject = "New Contact Form Submission from $name";
        $mail->Body    = "
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
        $mail->AltBody = "Name: $name\nPhone: $phone\nEmail: $email\nMessage:\n$message";

        // Send the email
        $mail->send();
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
