<?php

include 'config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'validate_mail.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$subject = stripslashes($_POST['subject']);
$message = stripslashes($_POST['message']);


$error = '';

// Check name
if(!$name){
$error .= '<p>Please enter your name.</p>';
}

// Check email
if(!$email){
$error .= '<p>Please enter an e-mail address.</p>';
}

if($email && !ValidateEmail($email)){
$error .= '<p>Please enter a valid e-mail address.</p>';
}

//Check subject
if(!$subject) {
$error .= '<p>Please enter subject.</p>';
}

// Check message (length)
if(!$message || strlen($message) < 1){
$error .= '<p>Please enter your message.</p>';
}

if(!$error){
$mail = mail(YOURMAIL, $subject, $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());


if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>