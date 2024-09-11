<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';


require 'vendor/autoload.php'; // Adjust the path as needed

if (isset($_POST['send'])) {
    // Sanitize input data
    $name = htmlspecialchars(string: $_POST['name']);
    $phone = htmlspecialchars(string: $_POST['number']);
    $email = htmlspecialchars(string: $_POST['email']);
    $message = htmlspecialchars(string: $_POST['message']);
    $subject = htmlspecialchars(string: $_POST['subject']);

    $mail = new PHPMailer(exceptions: true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Specify main SMTP server
        $mail->SMTPAuth   = true;             // Enable SMTP authentication
        $mail->Username   = 'harisahmed2238@gmail.com'; // Your Gmail address
        $mail->Password   = 'jwhr cezh btcl kxsj'; // Your Gmail App Password
        $mail->SMTPSecure = 'tls';            // Enable TLS encryption
        $mail->Port       = 587;              // TCP port to connect to

        // Recipients
        $mail->setFrom(address: 'harisahmed2238@gmail.com');
        $mail->addAddress(address: $email); // Add a recipient

        // Content
        $mail->isHTML(isHtml: true);          // Set email format to HTML
        $mail->Subject = $subject;    // Subject line
        $mail->Body    = $message;    // Email body

        // Send the email
        $mail->send();
        header('Location: index.html?status=success');
    } catch (Exception $e) {
        header('Location: index.html?status=error');
    }
}
?>
