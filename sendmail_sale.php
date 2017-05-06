<?php
// Variables
$select = trim($_POST['sel']);
$model = trim($_POST['model']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$sale = 'nothing';
	if ($select == 'buy_air') {
    	$sale = 'Purchase aircraft';
	}
	elseif ($select == 'sell_air') {
    	$sale = 'Sell aircraft';
	}
	elseif ($select == 'buy_hel') {
    	$sale = 'Purchase helicopter';
	}
	elseif ($select == 'sell_hel') {
    	$sale = 'Sell helicopter';
	}

// Email address validation - works with php 5.2+
function is_email_valid($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Avoid Email Injection and Mail Form Script Hijacking
$pattern = "/(content-type|bcc:|cc:|to:)/i";
if( preg_match($pattern, $email) || preg_match($pattern, $message) ) {
	exit;
}

// Email will be send
$to = "svjatoslav.romanjuk@gmail.com"; // Change with your email address
$sub = "$email from Ankur Group Corporation"; // You can define email subject
// HTML Elements for Email Body
$body = <<<EOD
<strong>You want to:</strong> $sale <br>
<strong>Model:</strong> $model <br>
<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
<strong>Message:</strong> $message <br>
EOD;
//Must end on first column
	
$headers = "From: $name <$email>\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=windows-1251' . "\r\n";

// PHP email sender
mail($to, $sub, $body, $headers);

?>
