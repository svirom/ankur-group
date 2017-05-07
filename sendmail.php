<?php
// Variables
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

// Email address validation - works with php 5.2+
function is_email_valid($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Avoid Email Injection and Mail Form Script Hijacking
$pattern = "/(content-type|bcc:|cc:|to:)/i";
if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $message) ) {
	exit;
}

// Email will be send
$to = "svjatoslav.romanjuk@gmail.com"; // Change with your email address
$sub = "$name from Ankur Group Corporation"; // You can define email subject
// HTML Elements for Email Body
$body = <<<EOD
<h3 style="font-size:22px; font-weight:400">The message from Ankur Group Corporation website (contact us/message box)</h3>
<hr>
<p style="font-size:20px; margin: 12px 0;"><strong>Name:</strong> $name</p>
<p style="font-size:20px; margin: 12px 0;"><strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a></p>
<p style="font-size:20px; margin: 12px 0;"><strong>Message:</strong> $message</p>
EOD;
//Must end on first column
	
$headers = "From: $name <$email>\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// PHP email sender
mail($to, $sub, $body, $headers);

?>
